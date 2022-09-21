import { Injectable } from '@angular/core';
import { Specialties } from '../models/specialties.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  constructor() { }

  getAllSpecialties(): Specialties[] {
    return [{
      id: 1,
      title: "Odontologist",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium dolorum tempore, illo quibusdam corporis numquam odit deleniti explicabo consectetur!",
      iconUrl: "assets/icons/tooth.png"
    },
    {
      id: 2,
      title: "Dermatologist",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium dolorum tempore, illo quibusdam corporis numquam odit deleniti explicabo consectetur!",
      iconUrl: "assets/icons/dermatology.png"
    },
    {
      id: 3,
      title: "Neurologist",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium dolorum tempore, illo quibusdam corporis numquam odit deleniti explicabo consectetur!",
      iconUrl: "assets/icons/brain.png"
    },
    {
      id: 4,
      title: "Pediatrician",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium dolorum tempore, illo quibusdam corporis numquam odit deleniti explicabo consectetur!",
      iconUrl: "assets/icons/pacifier.png"
    },
    {
      id: 5,
      title: "Obstetrician",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium dolorum tempore, illo quibusdam corporis numquam odit deleniti explicabo consectetur!",
      iconUrl: "assets/icons/obstetrical.png"
    }
   ];
  }
}

