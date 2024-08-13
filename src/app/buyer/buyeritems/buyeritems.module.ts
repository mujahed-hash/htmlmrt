import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyeritemsRoutingModule } from './buyeritems-routing.module';
import { BuyeritemsComponent } from './buyeritems.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    BuyeritemsComponent
  ],
  imports: [
    CommonModule,
    BuyeritemsRoutingModule,
    InputNumberModule,
    FormsModule,
    MatIconModule,
    ToastModule,
     ButtonModule,
  ],
  providers: [MessageService]

})
export class BuyeritemsModule { }
