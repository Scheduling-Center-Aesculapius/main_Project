import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Appointments } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl: String = environment.baseUrl;
  
  constructor(private httpClient: HttpClient) { }

  getAllAppointments(): Observable<Appointments[]> {
    const url = this.baseUrl + '/scheduling';
    return this.httpClient.get<Appointments[]>(url);
  }
}