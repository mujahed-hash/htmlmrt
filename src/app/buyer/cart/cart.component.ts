import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  token:any;
  cart: any = [] || {};
  user: any = {}; // Initialize user as an empty object
  showModal: boolean = false;
  showModal2: boolean = false;

  notes:any;
  constructor(    private buyerService:BuyerService, private router:Router
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

// confirmCheckout(confirmed: boolean): void {
//   this.showModal = false;
//   if (confirmed) {
//     this.buyerService.checkoutAllItems(this.token, this.notes).subscribe(response => {
//       console.log('Checkout all items:', response);
//       this.loadCart(); // Reload cart after checkout
//     });
//   }
// }
confirmCheckout(event: { confirmed: boolean, notes: string }): void {
  this.showModal = false;
  if (event.confirmed) {
    this.notes = event.notes;
    this.buyerService.checkoutAllItems(this.token, this.notes).subscribe(response => {
      console.log('Checkout all items:', response);
      this.loadCart(); // Reload cart after checkout
    });
  }
}

checkoutSingleItem(): void {
  this.showModal2 = true;

}
confirmCheckoutSingle(productId: string, event: { confirmed: boolean, notes: string }): void {
  this.showModal2 = false;
  if (event.confirmed) {
    this.notes = event.notes;
    this.buyerService.checkoutSingleItem(productId,this.token, this.notes).subscribe(response => {
      console.log('Checkout all items:', response);
      this.router.navigate(['/buyer/purchases'])

      this.loadCart(); // Reload cart after checkout
    });
  }
}
deleteCart(id: string, token:any): void {
  if (confirm('Are you sure you want to delete this Cart?')) {
    this.buyerService.deleteCartItem(id, this.token).subscribe(
      response => {
        console.log('Cart item deleted successfully!', response);
        this.loadCart(); // Reload the cart after deletion
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}

}
