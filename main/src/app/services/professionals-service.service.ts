import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsServiceService {

  constructor() { }

  getAll(){
    return [{
      id: 1,
      name: "Stephen Strange",
      favorite: false,
      stars : 4.5,
      specialty: ['Neurosurgeon'],
      imageUrl: "assets/professional/professional_2.jpg"
    },
    {
      id: 2,
      name: "Gregory House",
      favorite: true,
      stars : 5.0,
      specialty: ['Imunologist'],
      imageUrl: "assets/professional/professional_2.jpg"
    },
    {
      id: 3,
      name: "Stephen House",
      favorite: true,
      stars : 4.0,
      specialty: ['Dermatologist'],
      imageUrl: "assets/professional/professional_2.jpg"
    }
  ]
  }
}
