import { Injectable } from '@angular/core';
import { Professionals } from '../models/professionals.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {

  constructor() { }

  getAll(): Professionals[]{
    return [{
      id: 1,
      name: "AAAA",
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
    },
    {
      id: 4,
      name: "Ste House",
      favorite: false,
      stars : 3.0,
      specialty: ['Dermatologist'],
      imageUrl: "assets/professional/professional_2.jpg"
    },
    {
      id: 5,
      name: "House",
      favorite: true,
      stars : 1.0,
      specialty: ['Dermatologist'],
      imageUrl: "assets/professional/professional_2.jpg"
    },
    {
      id: 6,
      name: "Stephen",
      favorite: false,
      stars : 2.0,
      specialty: ['Dermatologist'],
      imageUrl: "assets/professional/professional_2.jpg"
    },
    {
      id: 7,
      name: "n House",
      favorite: true,
      stars : 5.0,
      specialty: ['Dermatologist'],
      imageUrl: "assets/professional/professional_2.jpg"
    },
    {
      id: 8,
      name: "Stephen House",
      favorite: true,
      stars : 4.0,
      specialty: ['Dermatologist'],
      imageUrl: "assets/professional/professional_2.jpg"
    }
  ];
  }
}
