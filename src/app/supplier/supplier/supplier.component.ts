import { Component } from '@angular/core';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent {
  token!:any;
  order:any;
  products:any;
  constructor(private supplyService: SupplierService){}
  ngOnInit() {
   this.token = localStorage.getItem('token');
   this.getOrdersCount()
   this.getProductsCount()

   } 
   getOrdersCount(){
    this.supplyService.getOrdersCount(this.token).subscribe((data:any)=>{
      console.log(data)
      this.order = data
    })
   }
   getProductsCount(){
    this.supplyService.getProductsCount(this.token).subscribe((data:any)=>{
      console.log(data)
      this.products = data

    })
   }
}
