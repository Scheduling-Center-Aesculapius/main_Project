import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  formLoginAdmin: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  submittedForm = false;

  admin_ = { username: '', password: '' };

  constructor(private formBuilder: FormBuilder, private router: Router, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.formLoginAdmin = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
    console.warn(this.formLoginAdmin);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formLoginAdmin.controls;
  }
  
  onSubmit(): void {
    this.submittedForm = true;
    if (this.formLoginAdmin.invalid) {
      return;
    }
    console.log(JSON.stringify(this.formLoginAdmin, null, 2));
  }

  login(): void {
    if (!this.formLoginAdmin.invalid) {
      this.securityService.logged = true;
      this.router.navigateByUrl("home-admin");
    }
  }


}
