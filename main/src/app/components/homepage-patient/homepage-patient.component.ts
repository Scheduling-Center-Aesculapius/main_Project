import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from 'src/app/services/professionals.service';
import { Professionals } from 'src/app/models/professionals.model';
import { StarRatingComponent } from 'ng-starrating';


@Component({
  selector: 'app-homepage-patient',
  templateUrl: './homepage-patient.component.html',
  styleUrls: ['./homepage-patient.component.css']
})

export class HomepagePatientComponent implements OnInit {
  responsiveOptions;
  professionals: Professionals[] = [];

  constructor(private ps: ProfessionalsService) {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
    }];
  }

  ngOnInit(): void {
    this.professionals = this.ps.getAll();
  }


}




