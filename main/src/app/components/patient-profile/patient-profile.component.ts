import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/models/patients.model';
import { Professionals } from 'src/app/models/professionals.model';
import { PatientsService } from 'src/app/services/patients.service';
import { ProfessionalsService } from 'src/app/services/professionals.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patients: Patients[] = [];
  constructor(private patientService: PatientsService) { }

  ngOnInit(): void {
    this.patients = this.patientService.getAllPatients();
  }

}
