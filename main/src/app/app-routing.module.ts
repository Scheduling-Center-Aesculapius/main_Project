import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagePatientComponent } from './components/homepage-patient/homepage-patient.component';
import { LoginAdmimComponent } from './components/login-admim/login-admim.component';
import { LoginPatientComponent } from './components/login-patient/login-patient.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';

const routes: Routes = [
  {path: '', component:MainPageComponent},
  {path: 'login-patient', component: LoginPatientComponent},
  {path: 'register-patient', component: RegisterPatientComponent},
  {path: 'home-patient', component: HomepagePatientComponent},
  {path: 'login-admin', component: LoginAdmimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
