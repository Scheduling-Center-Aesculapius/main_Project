import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';
import { ConfirmedValidator } from '../../Shared/confirmed.validator';
import { HttpClientModule } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
@Component({
  selector: 'app-register-patient-form',
  templateUrl: './register-patient-form.component.html',
  styleUrls: ['./register-patient-form.component.css'],
})
export class RegisterPatientFormComponent implements OnInit {
  form!: FormGroup;
  selectSex: Array<string> = ['male', 'female', 'outher'];
  positionSex!: any;
  submitted = false;
  selectedSex!: any;

  constructor(
    private formBuilder: FormBuilder,
    private ps: PatientsService,
    private router: Router,
    private http: HttpClientModule
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      cpf: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})'
          ),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
          ),
        ],
      ],
      sex: parseInt(this.selectedSex),
      email: ['', [Validators.required, Validators.email]],
      username: ['batata'],
      // password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(20)],
      // confirmPassword: ['', Validators.required, Validators.minLength(8), Validators.maxLength(20)],
      // professional: ['', [Validators.requiredTrue]],
      birthdate: [''],
      motherName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      fatherName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      street: ['', [Validators.required]],
      password: [''],
      numberAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  get f() {
    return this.form.controls;
  }

  register() {
    this.submitted = true;
    console.log(this.form.value);

    this.ps
      .save(this.form.value)
      .pipe(
        catchError((error) => {
          console.log(error);

          return of(error);
        })
      )
      .subscribe((result) => {
        // console.log(result);
        this.hasError
        this.router.navigateByUrl('login-patient');

      });
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  httpError(){

  }
}
