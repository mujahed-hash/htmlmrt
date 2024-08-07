import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel Mart';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigate(['/']);
    // }
    const lastRoute = localStorage.getItem('lastRoute');
    // if (lastRoute) {
    //   this.router.navigateByUrl(lastRoute);
    // }
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
  
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
