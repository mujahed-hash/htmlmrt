import { Component } from '@angular/core';
import { SupplierService } from '../../supplier.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-orderdelivered',
  templateUrl: './orderdelivered.component.html',
  styleUrls: ['./orderdelivered.component.scss']
})
export class OrderdeliveredComponent {
  token!:any;
  orders:any;
  newStatus: { [key: string]: string } = {}; // Object to hold the new status for each order
  constructor(
    private productService: SupplierService,
    public authService:AuthService
   
  ) { }


  ngOnInit(){
    this.token = localStorage.getItem('token')
    this.getApproveOrders()
  }

  getApproveOrders(){
    this.productService.getDeliveredOrders(this.token).subscribe((data:any)=>{
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
