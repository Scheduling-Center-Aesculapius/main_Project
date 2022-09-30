import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-patient-form',
  templateUrl: './register-patient-form.component.html',
  styleUrls: ['./register-patient-form.component.css'],

})
export class RegisterPatientFormComponent implements OnInit {
  personalInformation!: FormGroup;
  addressInformation!: FormGroup;
  otherInformations!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.personalInformation = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required,],
      cpf: ['', Validators.required],
      phone: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', Validators.required],
      sex: [''],
      motherName: ['', Validators.required],
      fatherName: ['', Validators.required],
    });
    this.addressInformation = this.formBuilder.group({
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      numberAddress: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],

    });
    this.otherInformations = this.formBuilder.group({
      allergies: [''],
    });
  }

  get personal() { return this.personalInformation.controls; }
  get address() { return this.addressInformation.controls; }
  get education() { return this.otherInformations.controls; }
  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalInformation.invalid) { return }
      this.step++
    }
    else if (this.step == 2) {
      this.address_step = true;
      if (this.addressInformation.invalid) { return }
      this.step++;
    }
  }

  previous() {
    this.step--
    if (this.step == 1) {
      this.address_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }
  }

  submit() {
    if (this.step == 3) {
      this.education_step = true;
      if (this.otherInformations.invalid) { return }
      alert("Well done!!")
    }
  }
}
