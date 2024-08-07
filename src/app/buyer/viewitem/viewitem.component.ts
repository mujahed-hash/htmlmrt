import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier/supplier.service';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.scss']
})
export class ViewitemComponent {
  token:any;

  product:any;
  quantities: { [key: string]: number } = {}; // This object holds the quantity for each product
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private productsService: SupplierService,
    private buyerService: BuyerService
   
  ) { }


  ngOnInit(){
    this.getItem();
    this.token = localStorage.getItem('token');
    
  }
  getItem(){
    this.route.params.subscribe((params) => {
      this.productsService.getProductByCustomIdentifier(params['customIdentifier']).subscribe((data: any) => {
        this.product = data;
        if (!this.quantities[this.product.id]) {
          this.quantities[this.product.id] = 1; // Set default quantity to 1 if not already set
        }
        console.log(data);
      });
        })
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
