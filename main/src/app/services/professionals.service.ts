import { Injectable } from '@angular/core';
import { Professionals } from '../models/professionals.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {
  private readonly Professional_API = "https://aesculapius-scheduling-center.herokuapp.com/medicals"

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Professionals[]>(this.Professional_API);
  }
}
