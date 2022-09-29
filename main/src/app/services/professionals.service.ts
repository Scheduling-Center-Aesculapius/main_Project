import { Injectable } from '@angular/core';
import { Professionals } from '../models/professionals.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {
  baseUrl: String = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Professionals[]>{
    const url = this.baseUrl + '/medicals';
    return this.httpClient.get<Professionals[]>(url);
    }
}
