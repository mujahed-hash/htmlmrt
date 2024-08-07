import { Component,ElementRef,HostListener, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/auth/login/local-storage.service'
import { SupplierService } from 'src/app/supplier/supplier.service';
import { BuyerService } from '../buyer.service';
@Component({
  selector: 'app-buyeritems',
  templateUrl: './buyeritems.component.html',
  styleUrls: ['./buyeritems.component.scss']
})
export class BuyeritemsComponent {
  loggedUser!:any;
  products: any[] = [];
  start = 0;
  limit = 10;
  isLoading = false;
  hasMoreProducts = true;
  event!:any;
  quantity!:any;
  product:any;
  token:any;
  
  quantities: { [key: string]: number } = {}; // This object holds the quantity for each product
  @ViewChild('loadingIndicator') loadingIndicator!: ElementRef;
   constructor(private supplyService: SupplierService,private lService:LocalStorageService,  private el: ElementRef, 
    private buyerService:BuyerService ){}
   ngOnInit() {
    this.loggedUser = this.lService.getUserIdFromToken();
    this.loadProducts();
    this.token = localStorage.getItem('token');
    console.log(this.quantity);
    this.products.forEach(product => {
      this.quantities[product.id] = this.quantities[product.id] || 1; // Set default quantity to 1
    });
  }

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
    this.checkContentHeight();
  }

  loadProducts(): void {
    if (this.isLoading || !this.hasMoreProducts) return;

    this.isLoading = true;
    this.supplyService.getProducts(this.start, this.limit).subscribe(
      data => {
        this.isLoading = false;
        if (data && Array.isArray(data.products)) {
          this.products = [...this.products, ...data.products];
          this.products.forEach(product => {
            if (!this.quantities[product.id]) {
              this.quantities[product.id] = 1; // Set default quantity to 1 if not already set
            }
          });
          this.start += this.limit;
          this.checkContentHeight();

          // If fewer products are returned than the limit, no more products are available
          this.hasMoreProducts = data.products.length === this.limit;
        } else {
          console.error('Unexpected response structure:', data);
          this.checkContentHeight();
        }
      },
      error => {
        this.isLoading = false;
        console.error('Error loading products:', error);
      }
    );
  }

  checkContentHeight() {
    const contentHeight = this.el.nativeElement.querySelector('.items').offsetHeight;
    const windowHeight = window.innerHeight;
    this.hasMoreProducts = contentHeight < windowHeight;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkContentHeight();
  }

  initIntersectionObserver(): void {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && this.hasMoreProducts && !this.isLoading) {
        this.loadProducts();
      }
    }, {
      rootMargin: '100px'
    });

    if (this.loadingIndicator) {
      observer.observe(this.loadingIndicator.nativeElement);
    }
  }

  addProductToCart(productId: string) {
    const quantity = this.quantities[productId] || 1// Default to 1 if quantity is not set
    this.buyerService.addToCart(productId, quantity, this.token).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.error('Error adding product to cart:', error);
      }
    );
  }
}
