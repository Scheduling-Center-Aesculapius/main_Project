import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-patient',
  templateUrl: './homepage-patient.component.html',
  styleUrls: ['./homepage-patient.component.css']
})
export class HomepagePatientComponent implements OnInit {
  professionals!: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.professionals = new Array();
    this.professionals.push({
      name: "Stephen Strange",
      specialty: "Neurosurgeon"
    }),
    this.professionals.push({
      name: "Gregory House",
      specialty: "Imunologist"
    })
  }

}
