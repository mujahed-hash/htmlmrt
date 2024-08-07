import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-aeuser',
  templateUrl: './aeuser.component.html',
  styleUrls: ['./aeuser.component.scss']
})
export class AEUserComponent {
  userForm!: FormGroup;
  customIdentifer!: string;
  isEditMode: boolean = false;
  token!:any;

  constructor(
    private fb: FormBuilder,
    private userService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['aa', Validators.required],
      email: ['a1a@aa.com', [Validators.required, Validators.email]],
      password: [''],
      phone: ['0987', Validators.required],
      street: ['as'],
      apartment: ['wc'],
      city: ['cdwe', Validators.required],
      zip: ['3334'],
      country: ['iin', Validators.required],
      isAdmin: [true],
      isSupplier: [false],
      isBuyer: [false]
    });
    this.token = localStorage.getItem('token')

    this.customIdentifer = this.route.snapshot.params['customIdentifer'];

    if (this.customIdentifer) {
      this.isEditMode = true;
      this.userService.getUserByCID(this.customIdentifer, this.token).subscribe(
        user => {
          console.log(user); // Check if the user data is being retrieved correctly
          this.userForm.patchValue(user); // Populate the form with user data
        },
        error => console.error('Error fetching user details', error)
      );
    }
    if(this.customIdentifer && this.isEditMode){
      this.userForm.value.password = ''
    }
  }

  onSubmit() {
    if (this.userForm.invalid) {
      console.log('iclicked-inavlid-form', this.userForm.value)

      return;
    }
   console.log('iclicked-valid-form', this.userForm.value)
    const userData = this.userForm.value;

    if (this.isEditMode) {
      this.userService.updateUser(this.customIdentifer, userData,this.token).subscribe(
        response => {
          console.log('User updated successfully', response);
          this.router.navigate(['/admin/allusers']); // Navigate to user list or appropriate page
        },
        error => console.error('Error updating user', error)
      );
    } else {
      this.userService.addUser(userData,this.token).subscribe(
        response => {
          console.log('User added successfully', response);
          this.router.navigate(['/admin/allusers']); // Navigate to user list or appropriate page
        },
        error => console.error('Error adding user', error)
      );
    }
  }
}
