import { Component } from '@angular/core';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  token:any;
  user:any;
   constructor(private apiService: AllService){}

   ngOnInit(){
    this.token = localStorage.getItem('token'); // Get the token from localStorage
    this.userProfile()
   }

   userProfile(){
    this.apiService.getUserProfile(this.token).subscribe((data:any)=>{
      console.log(data);
      this.user = data.user
    })
   }
}
