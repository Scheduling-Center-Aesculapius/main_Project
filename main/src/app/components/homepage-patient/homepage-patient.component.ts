import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-patient',
  templateUrl: './homepage-patient.component.html',
  styleUrls: ['./homepage-patient.component.css']
})
export class HomepagePatientComponent implements OnInit {
  // professionals info
  // professionals!: Array<any>;
  id!: number;
  name!: string;
  favorite:boolean = false;
  stars: number =0;
  specialty?:string[];
  imageUrl!:string;

  responsiveOptions;
 
  constructor() {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
  }];
  }

  ngOnInit(): void {
    // this.professionals = new Array();
    // this.professionals.push({
    //   imageUrl: "assets/professional/professional_2.jpg",
    //   name: "Stephen Strange",
    //   specialty: "Neurosurgeon"
    // }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Gregory House",
    //     specialty: "Imunologist"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Stephen Strange",
    //     specialty: "Neurosurgeon"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Gregory House",
    //     specialty: "Imunologist"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Stephen Strange",
    //     specialty: "Neurosurgeon"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Gregory House",
    //     specialty: "Imunologist"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Stephen Strange",
    //     specialty: "Neurosurgeon"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Gregory House",
    //     specialty: "Imunologist"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Gregory House",
    //     specialty: "Imunologist"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Gregory House",
    //     specialty: "Imunologist"
    //   }),
    //   this.professionals.push({
    //     imageUrl: "assets/professional/professional_2.jpg",
    //     name: "Gregory House",
    //     specialty: "Imunologist"
    //   })
  }


}




