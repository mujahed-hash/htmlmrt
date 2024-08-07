import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyeritemsRoutingModule } from './buyeritems-routing.module';
import { BuyeritemsComponent } from './buyeritems.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    BuyeritemsComponent
  ],
  imports: [
    CommonModule,
    BuyeritemsRoutingModule,
    InputNumberModule,
    FormsModule,
    MatIconModule
  ]
})
export class BuyeritemsModule { }
