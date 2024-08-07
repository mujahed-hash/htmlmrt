import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerDashboardComponentComponent } from './buyer-dashboard-component/buyer-dashboard-component.component';
import { BuyerPurchasesComponentComponent } from './buyer-purchases-component/buyer-purchases-component.component';
import { CartComponent } from './cart/cart.component';
import { ViewitemComponent } from './viewitem/viewitem.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BuyerDashboardComponentComponent },
  { path: 'purchases', component: BuyerPurchasesComponentComponent },
  { path: '', loadChildren: () => import('./buyeritems/buyeritems.module').then(m => m.BuyeritemsModule)},
  { path: 'cart', component: CartComponent },
  {path:'item/view/:customIdentifier', component:ViewitemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
