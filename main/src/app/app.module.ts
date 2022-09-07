import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPatientComponent } from './components/login-patient/login-patient.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { HomepagePatientComponent } from './components/homepage-patient/homepage-patient.component';
import { RegisterAdmimComponent } from './components/register-admim/register-admim.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPatientComponent,
    NavbarComponent,
    RegisterPatientComponent,
    HomepagePatientComponent,
    RegisterAdmimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
