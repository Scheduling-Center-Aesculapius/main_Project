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
      pic: "assets/professional/professional_1.jpg",
      name: "Stephen Strange",
      specialty: "Neurosurgeon"
    }),
      this.professionals.push({
        pic: "assets/professional/professional_2.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_3.jpg",
        name: "Stephen Strange",
        specialty: "Neurosurgeon"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_4.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_5.jpg",
        name: "Stephen Strange",
        specialty: "Neurosurgeon"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_6.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_7.jpg",
        name: "Stephen Strange",
        specialty: "Neurosurgeon"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_8.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_9.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_10.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      }),
      this.professionals.push({
        pic: "assets/professional/professional_11.jpg",
        name: "Gregory House",
        specialty: "Imunologist"
      })
  }


}




