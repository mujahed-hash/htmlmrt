import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent {
  token!:any;
  users!:any;
  constructor(private adminService:AdminService){
    this.token = localStorage.getItem('token')

  }
  ngOnInit(){
    this.getAllUsers();
  }
  getAllUsers(){
    this.adminService.getUsers(this.token).subscribe((data:any)=>{
      console.log(data);
      this.users = data
    })
  }
}
