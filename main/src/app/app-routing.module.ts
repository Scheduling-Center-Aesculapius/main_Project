import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageAdminComponent } from './components/homepage-admin/homepage-admin.component';
import { HomepagePatientComponent } from './components/homepage-patient/homepage-patient.component';
import { LoginAdmimComponent } from './components/login-admim/login-admim.component';
import { LoginPatientComponent } from './components/login-patient/login-patient.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { RegisterProfessionalComponent } from './components/register-professional/register-professional.component';
import { SecurityService } from './security.service';

const routes: Routes = [

  {path: 'login-patient', component: LoginPatientComponent},
  {path: 'register-patient', component: RegisterPatientComponent},
  {path: 'register-professional', component: RegisterProfessionalComponent},
  {path: 'home-patient', component: HomepagePatientComponent,canActivate:[SecurityService]},
  {path: 'patient-profile', component: PatientProfileComponent,canActivate:[SecurityService]},
  // , canActivate:[SecurityService]
  {path: 'login-admin', component: LoginAdmimComponent},
  {path: 'home-admin', component: HomepageAdminComponent,canActivate:[SecurityService]},
  {path: '', component:MainPageComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
