import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  token!:any;
  order:any;
  products:any;
  users:any;
  constructor(private adminService: AdminService){}
  ngOnInit() {
   this.token = localStorage.getItem('token');
   this.getOrdersCount()
   this.getProductsCount()
   this.getUsersCount()

   } 
   getOrdersCount(){
    this.adminService.getOrdersCountAdmin(this.token).subscribe((data:any)=>{
      console.log(data)
      this.order = data
    })
   }
   getProductsCount(){
    this.adminService.getProductsCountAdmin(this.token).subscribe((data:any)=>{
      console.log(data)
      this.products = data

    })
   }
   getUsersCount(){
    this.adminService.getUsersCountAdmin(this.token).subscribe((data:any)=>{
      console.log(data)
      this.users = data

    })
   }
}
