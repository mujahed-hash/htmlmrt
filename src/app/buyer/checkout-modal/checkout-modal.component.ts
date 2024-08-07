import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent {
  @Input() user: any;
  @Output() confirmCheckout = new EventEmitter<boolean>();

  onConfirm(): void {
    this.confirmCheckout.emit(true);
  }

  onCancel(): void {
    this.confirmCheckout.emit(false);
  }
}
