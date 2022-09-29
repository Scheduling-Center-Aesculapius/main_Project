import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Validation from 'src/app/utils/validation';


@Component({
  selector: 'app-add-appointment-btn',
  templateUrl: './add-appointment-btn.component.html',
  styleUrls: ['./add-appointment-btn.component.css']
})
export class AddAppointmentBtnComponent implements OnInit {
  form!: FormGroup;
  submitted = false;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        cpf: ['', [Validators.required, Validators.pattern("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")]],
        phoneNumber: ['', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
        email: ['', [Validators.required, Validators.email]],
        professional: ['', [Validators.requiredTrue]],
        appointmentDate: ['', [Validators.pattern("(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})")]],
        appointmentTime: ['', [Validators.pattern(/^(\d{2}|\d{1})\/(\d{2}|\d{1})\/\d{4}$/)]],
      },
    );
    console.log(this.form);
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit')
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}