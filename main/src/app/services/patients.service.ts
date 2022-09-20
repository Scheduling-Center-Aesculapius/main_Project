import { Injectable } from '@angular/core';
import { Patients } from '../models/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor() { }

  getAllPatients(): Patients[]{
    return [{
      id: 1,
      name: "Steve",
      lastName:"Rogers",
      cpf:"897.123.489-63",
      phone:"47 98965-5263",
      sex:"Male",
      birthdate:"23/10/1985",
      email:"steve.rogers@yahoo.com",
      motherName:"Sarah Rogers",
      fatherName:"Joseph Rogers",
      cepAddress:"88780-000",
      cityAddress:"Imbituba",
      streetAddress:"American Avenue",
      numberAddress:"407",
      stateAddress:"SC",
      countryAddress:"BR",
      alergies:"No",
      imgProfileUrl: "assets/patient/patient_8.jpg.jpg"
    },
    {
      id: 2,
      name: "Peter",
      lastName:"Parker",
      cpf:"023.156.159-62",
      phone:"47 98563-4541",
      sex:"Male",
      birthdate:"23/10/1999",
      email:"peter.parker@gmail.com",
      motherName:"Mary Parker",
      fatherName:"Richard Parker",
      cepAddress:"88780-000",
      cityAddress:"Imbituba",
      streetAddress:"Lemon Street",
      numberAddress:"569",
      stateAddress:"SC",
      countryAddress:"BR",
      alergies:"No",
      imgProfileUrl: "assets/patient/patient_9.jpg.jpg"
    },
    {
      id: 3,
      name: "Anthony",
      lastName:"Stark",
      cpf:"123.563.159-85",
      phone:"48 98845-2274",
      sex:"Male",
      birthdate:"23/10/75",
      email:"iron_man@gmail.com",
      motherName:"Maria Stark",
      fatherName:"Howard Stark",
      cepAddress:"56600-006",
      cityAddress:"Smalville",
      streetAddress:"Faith Avenue",
      numberAddress:"123",
      stateAddress:"SC",
      countryAddress:"BR",
      alergies:"No",
      imgProfileUrl: "assets/patient/patient_10.jpg.jpg"
    },
    {
      id: 4,
      name: "Natasha",
      lastName:"Romanoff",
      cpf:"123.456.789-96",
      phone:"47 99656-8987",
      sex:"Female",
      birthdate:"30/12/1989",
      email:"black_widowahoo.com",
      motherName:"Melina Vostokoff",
      fatherName:"Alexei Shostakov",
      cepAddress:"56600-006",
      cityAddress:"Smalville",
      streetAddress:"Flower Street",
      numberAddress:"1903",
      stateAddress:"SC",
      countryAddress:"BR",
      alergies:"Dust",
      imgProfileUrl: "assets/patient/patient_7.jpg.jpg"
    },
    {
      id: 5,
      name: "Thor",
      lastName:"Odinson",
      cpf:"023.563.698.96",
      phone:"47 98874-6323",
      sex:"Male",
      birthdate:"30/05/1989",
      email:"thunder_god@gmail.com",
      motherName:"Joro",
      fatherName:"Odin",
      cepAddress:"89600-000",
      cityAddress:"Joaçaba",
      streetAddress:"Mjolnir Avenue",
      numberAddress:"1903",
      stateAddress:"SC",
      countryAddress:"BR",
      alergies:"Dust",
      imgProfileUrl: "assets/patient/patient_6.jpg.jpg"
    },
    {
      id: 6,
      name: "Wanda",
      lastName:"Maximoff",
      cpf:"023.102.558-85",
      phone:"49 98847-1002",
      sex:"Female",
      birthdate:"01/05/1989",
      email:"scarlet_witch@gmail.com",
      motherName:"Magda Maximoff",
      fatherName:"Erik Lehnsherr",
      cepAddress:"89600-000",
      cityAddress:"Joaçaba",
      streetAddress:"Vison Avenue",
      numberAddress:"456",
      stateAddress:"SC",
      countryAddress:"BR",
      alergies:"No",
      imgProfileUrl: "assets/patient/patient_5.jpg.jpg"
    },
   
   
   
  ];
  }

  
}
