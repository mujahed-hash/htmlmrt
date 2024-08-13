import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer/buyer.component';
import { BuyerDashboardComponentComponent } from './buyer-dashboard-component/buyer-dashboard-component.component';
import { BuyerPurchasesComponentComponent } from './buyer-purchases-component/buyer-purchases-component.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CartComponent } from './cart/cart.component';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import { ViewitemComponent } from './viewitem/viewitem.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CheckoutDialogComponent } from './checkout-dialog/checkout-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    BuyerComponent,
    BuyerDashboardComponentComponent,
    BuyerPurchasesComponentComponent,
    CartComponent,
    CheckoutModalComponent,
    ViewitemComponent,
    CheckoutDialogComponent,
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    InputNumberModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    ToastModule,
     ButtonModule,
  ],
  providers: [MessageService]

})
export class BuyerModule { }
