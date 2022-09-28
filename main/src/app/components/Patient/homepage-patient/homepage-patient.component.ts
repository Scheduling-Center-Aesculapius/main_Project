import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from 'src/app/services/professionals.service';
import { Professionals } from 'src/app/models/professionals.model';
import { Specialties } from 'src/app/models/specialties.model';
import { SpecialtiesService } from 'src/app/services/specialties.service';
import { StarRatingComponent } from 'ng-starrating';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-homepage-patient',
  templateUrl: './homepage-patient.component.html',
  styleUrls: ['./homepage-patient.component.css'],
})

export class HomepagePatientComponent implements OnInit {
  responsiveOptions;
  professionals: Observable<Professionals[]>;
  // specialties: Specialties[] = [];


  constructor(private ps: ProfessionalsService, private ss: SpecialtiesService) {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
    }];
    this.professionals = this.ps.getAll();
  }

  ngOnInit(): void {
    
    // this.specialties = this.ss.getAllSpecialties();
  }
}




