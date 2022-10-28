import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginMedical } from 'src/app/models/loginMedical';
import { LoginPatient } from 'src/app/models/loginPatient';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login-professional',
  templateUrl: './login-professional.component.html',
  styleUrls: ['./login-professional.component.css']
})
export class LoginProfessionalComponent implements OnInit {

  form: FormGroup = new FormGroup({
    crm: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  public LoginMedical!: LoginMedical;

  user_ = { crm: '', password: '' };

  constructor(private loginService: LoginServiceService,
    private formBuilder: FormBuilder,
    private security: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
    this.LoginMedical = new LoginMedical();
    this.form = this.formBuilder.group(
      {
        crm:['', [Validators.required]],
        password: ['', [Validators.required]]

      },
    );
    console.log(this.form);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  login(): void {
    if (!this.form.invalid) {
      console.log("deu certo");

      this.loginService.loginMedical(this.LoginMedical).subscribe(
        (date) => {
          this.security.logged = true;
          this.router.navigateByUrl("home-professional");

        },
        (error: any) => { console.log(error) }
      )
    }
    console.log("Deu errado");

  }
}
