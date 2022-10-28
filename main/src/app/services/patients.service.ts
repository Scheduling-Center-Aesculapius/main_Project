import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../app-constants';
import { Patients } from '../models/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl: String = "https://aesculapius-scheduling-center.herokuapp.com";

  private readonly PATIENT_URL = this.baseUrl + '/patients';

  constructor(private httpClient: HttpClient, private router:Router) { }

  getAllPatients():Observable<Patients[]>{
    const url = this.baseUrl + '/patients';
    return this.httpClient.get<Patients[]>(url);
    }

  save(record: Patients){
   return this.httpClient.post<Patients>(this.PATIENT_URL, record);



  }


}
