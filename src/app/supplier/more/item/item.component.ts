import { Component } from '@angular/core';
import { SupplierService } from '../../supplier.service';
import { LocalStorageService } from 'src/app/auth/login/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  product:any;
  NewCDI:any;
  constructor(
    private route: ActivatedRoute,
    private productService: SupplierService,
    private router: Router,

    private productsService: SupplierService,
   
  ) { }


  ngOnInit(){
    this.getItem()
  }
  getItem(){
    this.route.params.subscribe((params) => {
      this.productsService.getProductByCustomIdentifier(params['customIdentifier']).subscribe((data: any) => {
        this.product = data;
        this.NewCDI = data.customIdentifer
      });
        })
      }

      toggleEdit(): void {
        // this.isEditing = !this.isEditing;
        this.router.navigate(['/supplier/product/edit/', this.NewCDI ]);
    
      }    
}
