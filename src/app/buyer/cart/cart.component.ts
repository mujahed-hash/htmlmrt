import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  token:any;
  cart: any;
  user: any = {}; // Initialize user as an empty object
  showModal: boolean = false;
  notes:any;
  constructor(    private buyerService:BuyerService
    ){
  }
ngOnInit(){
  this.token = localStorage.getItem('token')
  this.loadCart(); // Reload cart after checkout
  this.loadUser();
}
loadCart(): void {
  this.buyerService.getCart(this.token).subscribe(data => {
    this.cart = data.items;
  });
}
loadUser(): void {
  this.buyerService.getUserProfile(this.token).subscribe(data => {
    this.user = data.user;
    console.log(data.user)
  });
}
checkoutAllItems(): void {
  this.showModal = true;
}

confirmCheckout(confirmed: boolean): void {
  this.showModal = false;
  if (confirmed) {
    this.buyerService.checkoutAllItems(this.token, this.notes).subscribe(response => {
      console.log('Checkout all items:', response);
      this.loadCart(); // Reload cart after checkout
    });
  }
}

checkoutSingleItem(productId: string, token:any): void {
  this.buyerService.checkoutSingleItem(productId, this.token, this.notes).subscribe(response => {
    console.log('Checkout single item:', response);
    this.loadCart(); // Reload cart after checkout
  });
}
}
