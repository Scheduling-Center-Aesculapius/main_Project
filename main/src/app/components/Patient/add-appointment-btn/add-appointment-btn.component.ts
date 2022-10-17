import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { Appointments } from 'src/app/models/appointment.model';
import { LoginPatient } from 'src/app/models/loginPatient';
import { medicalModal } from 'src/app/models/medicalModal';
import { RespondeLogin } from 'src/app/models/RespondeLogin';
import Validation from 'src/app/utils/validation';


@Component({
  selector: 'app-add-appointment-btn',
  templateUrl: './add-appointment-btn.component.html',
  styleUrls: ['./add-appointment-btn.component.css']
})
export class AddAppointmentBtnComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  public Appointments!: Appointments;
  public medicals!:any[];


  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.Appointments = new Appointments
    console.log(this.getAll());
    this.form = this.formBuilder.group(
      {
        patient: ['', [Validators.required]],
        cpf: ['', [Validators.required, Validators.pattern("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")]],
        description: ['', [Validators.required]],
        medical: ['', [Validators.requiredTrue]],
        dateOpen: ['', [Validators.pattern("(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})")]],
        priority: ['', [Validators.required]],

      },
    );
    console.log(this.form);
  }

  getAll(): Observable<medicalModal[]>{
    const url = AppConstants.medicals;
    return this.http.get<medicalModal[]>(url);
    }


  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    console.log(this.medicals);
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {


        return this.http.post<Appointments>(
          AppConstants.baseAppointments, Appointments
          );

      }
      return console.log("Não!")
    }


  onCancel(): void {
    this.submitted = false;
    this.form.reset();
  }
}
