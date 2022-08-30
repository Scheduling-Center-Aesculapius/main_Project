import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '/login-patient', component:LoginPatientComponent},
  {path: '/main-page', component:MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
