import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/auth/login/local-storage.service';
import { SupplierService } from 'src/app/supplier/supplier.service';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-purchases-component',
  templateUrl: './buyer-purchases-component.component.html',
  styleUrls: ['./buyer-purchases-component.component.scss']
})
export class BuyerPurchasesComponentComponent {
  token:any;
  order:any;
  constructor(private supplyService: BuyerService,private lService:LocalStorageService){}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.getPurchases()
  }
  getPurchases(){
    this.supplyService.getPurchases(this.token).subscribe((data:any)=>{
      console.log(data);
      this.order = data

    })
  }
}
