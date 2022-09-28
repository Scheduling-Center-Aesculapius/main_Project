import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-admim',
  templateUrl: './login-admim.component.html',
  styleUrls: ['./login-admim.component.css']
})
export class LoginAdmimComponent implements OnInit {
  email: string = "";
  password: string = "";
  constructor(
    private seguranca: SecurityService,
    private userService: UserLoggedService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login(): void {

    this.userService
      .login(this.email, this.password)
      .pipe(
        catchError((error) => {
          console.log(
            'Falha simulada pois não há backend ainda, então pode entrar'
          );
          return of(true);
        })
      )
      .subscribe((response: any) => {
        console.log('logou?');
        console.log('response', response);
        this.seguranca.logged = response;
        this.seguranca.email = this.email
        this.router.navigateByUrl("home-admin")
      });
  }

  forgotPassword(): void {
    console.log("forgotPassword");
  }

  register(): void {
    console.log("register");
  }

}
