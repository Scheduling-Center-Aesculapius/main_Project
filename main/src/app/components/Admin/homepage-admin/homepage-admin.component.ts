import { Component, OnInit } from '@angular/core';
import { medicalModal } from 'src/app/models/medicalModal';
import { ProfessionalsService } from 'src/app/services/professionals.service';
import { ProfessionalSearchComponent } from '../../Professional/professional-search/professional-search.component';

@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.component.html',
  styleUrls: ['./homepage-admin.component.css']
})
export class HomepageAdminComponent implements OnInit {
  professionals: medicalModal[] = [];
  constructor(private medical : ProfessionalsService) { }

  ngOnInit(): void {
    this.medical.getAll().subscribe((resposta: medicalModal[]) => {
      this.professionals = resposta;
      console.log(this.professionals)
  })


  }

}
