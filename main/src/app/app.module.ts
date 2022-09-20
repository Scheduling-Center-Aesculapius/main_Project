import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPatientComponent } from './components/login-patient/login-patient.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { HomepagePatientComponent } from './components/homepage-patient/homepage-patient.component';
import { RegisterAdmimComponent } from './components/register-admim/register-admim.component';
import { SecurityService } from './security.service';
import { HomepageAdminComponent } from './components/homepage-admin/homepage-admin.component';
import { CarouselModule } from 'primeng/carousel';
import { PrimeIcons } from 'primeng/api';
import { RatingModule } from 'ng-starrating';
import { RegisterProfessionalComponent } from './components/register-professional/register-professional.component';
import { DialogModule } from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPatientComponent,
    NavbarComponent,
    RegisterPatientComponent,
    HomepagePatientComponent,
    RegisterAdmimComponent,
    HomepageAdminComponent,
    RegisterProfessionalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    RatingModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent],
})
export class AppModule { }
