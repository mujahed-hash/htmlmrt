import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vieworder-as',
  templateUrl: './vieworder-as.component.html',
  styleUrls: ['./vieworder-as.component.scss']
})
export class VieworderASComponent  {
order:any={};
token:any
constructor( private sharedService: SharedService, private actRoute: ActivatedRoute){}
ngOnInit(){
  this.token = localStorage.getItem('token');
 this.getOrder();
}
getOrder(){
  this.actRoute.params.subscribe((params) => {
    this.sharedService.getOrderAS(params['customIdentifier'], this.token).subscribe((data: any) => {
      this.order = data;
    
      console.log(data);
    });
      })}

      printOrder(): void {
        const printContents = document.querySelector('.order-details-container')?.innerHTML;
        const originalContents = document.body.innerHTML;
      
        if (printContents) {
          document.body.innerHTML = printContents;
          window.print();
          document.body.innerHTML = originalContents;
          window.location.reload(); // To restore the original page state after printing
        } else {
          console.error('Order details not found for printing.');
        }
      }
      
}
