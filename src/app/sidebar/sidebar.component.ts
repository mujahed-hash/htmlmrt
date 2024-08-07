import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isMobile: boolean = false;
  isSidenavOpened: boolean = true;

  constructor(
    private observer: BreakpointObserver,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 1100px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
      this.isSidenavOpened = !this.isMobile;
    });
  }

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
    if(!this.isMobile){
        this.isSidenavOpened = !!this.isMobile;

        // this.isMobile = !this.isMobile
        // this.isSidenavOpened = !this.isMobile;
    }

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
