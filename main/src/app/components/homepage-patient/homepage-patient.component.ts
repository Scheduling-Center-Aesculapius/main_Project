import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-patient',
  templateUrl: './homepage-patient.component.html',
  styleUrls: ['./homepage-patient.component.css']
})
export class HomepagePatientComponent implements OnInit {
  professionals!: Array<any>;
  images!: Array<any>; 
  responsiveOptions;
 
  constructor() {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
  }];
  }

  ngOnInit(): void {
    this.professionals = new Array();
    this.professionals.push({
      pic: "assets/professional/professional_2.jpg",
      name: "Stephen Strange",
      specialty: "Neurosurgeon"
    }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Stephen Strange",
        specialty: "Neurosurgeon"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Stephen Strange",
        specialty: "Neurosurgeon"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Stephen Strange",
        specialty: "Neurosurgeon"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      })
  }


}




