import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loggedIn:boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
ngOnInit(){
  if(this.authService.isLoggedIn()){
    this.router.navigate(['/home']);

  }
}
//   login() {
//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;
//       this.authService.login(email, password).subscribe(
//         response => {
//           localStorage.setItem('token', response.token);
//           this.router.navigate(['/home']);
//           this.loggedIn = true;
//         },
//         error => {
//           console.error('Login failed', error);
//         }
//       );
//     }
//   }
login() {
  if (this.loginForm.valid) {
    // Extract email and password from the form values
    const { email, password } = this.loginForm.value;

    // Normalize the email to lowercase
    const normalizedEmail = email.trim().toLowerCase();

    // Call the authentication service with the normalized email
    this.authService.login(normalizedEmail, password).subscribe(
      response => {
        // Store the token in local storage
        localStorage.setItem('token', response.token);
        
        // Navigate to the home page
        this.router.navigate(['/home']);
        
        // Set loggedIn flag
        this.loggedIn = true;
      },
      error => {
        // Log error message
        console.error('Login failed', error);
      }
    );
  }
}

}
