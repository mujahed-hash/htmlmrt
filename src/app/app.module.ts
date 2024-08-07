import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationService } from './navigation.service';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    IonicModule.forRoot({
      rippleEffect: false,  // Disable ripple effect globally
    }),
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
