import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VieworderASComponent } from './vieworder-as/vieworder-as.component';

const routes: Routes = [
  {path:'view-order/:customIdentifier', component:VieworderASComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
