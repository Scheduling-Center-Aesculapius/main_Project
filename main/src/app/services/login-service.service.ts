import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(usuario: { login: any; password?: string; }){
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data =>{
      // retorno http
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
      // no spring no arquivo JWTTokenAuth
      // isso habilita a resposta para porta diferente do angular
      // response.addheader("Acess-Control-Allow-Origin", "*")

      localStorage.setItem("token", token);
      console.log("Token " + localStorage.getItem(token))
    },
      error => {
        console.error("Auth error")
      }
    );
  }
}
