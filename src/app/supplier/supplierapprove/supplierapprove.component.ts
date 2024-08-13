import { Component } from '@angular/core';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplierapprove',
  templateUrl: './supplierapprove.component.html',
  styleUrls: ['./supplierapprove.component.scss']
})
export class SupplierapproveComponent {
  token!:any;
  orders:any[]=[];
  newStatus: { [key: string]: string } = {}; // Object to hold the new status for each order
  constructor(
    private productService: SupplierService,

   
  ) { }


  ngOnInit(){
    this.token = localStorage.getItem('token')
    this.getApproveOrders()
  }

  getApproveOrders(){
    this.productService.getApprovedOrders(this.token).subscribe((data:any)=>{
      this.orders = data
      this.initializeStatus();
      console.log(data);
    })
  }
  initializeStatus(): void {
    this.orders.forEach((order:any) => {
      this.newStatus[order._id] = order.status;
    });
  }
  updateStatus(orderId: string, userId: string): void {
    const newStatus = this.newStatus[orderId];
    this.productService.updateOrderStatus(orderId,userId, newStatus, this.token).subscribe(
      (response:any) => {
        console.log('Order status updated successfully', response);
        this.getApproveOrders(); // Reload orders after update
      },
      (error:any) => {
        console.error('Error updating order status', error);
      }
    );
  }
}
