import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPatientComponent } from './components/login-patient/login-patient.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';

const routes: Routes = [
  {path: '', component:MainPageComponent},
  {path: 'login-patient', component: LoginPatientComponent},
  {path: 'register-patient', component: RegisterPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
