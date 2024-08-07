import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AEUserComponent } from './aeuser/aeuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationService } from '../navigation.service';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    AEUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[AEUserComponent],
  providers: [NavigationService],

})
export class AdminModule { }
