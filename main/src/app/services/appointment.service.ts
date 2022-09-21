import { Injectable } from '@angular/core';
import { Appointments } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  getAllAppointments(): Appointments[] {
    return [{
      id: 1,
      patientName: "Steve Rogers",
      doctorName: "Gregory House",
      appointmentDate: "12/05/2022",
      appointmentTime: "15h00",
      patology: ["Headache", " Stomachache"]
    },
    {
      id: 2,
      patientName: "Steve Rogers",
      doctorName: "Gregory Stark",
      appointmentDate: "12/09/2022",
      appointmentTime: "17h00",
      patology: ["Headache"]
    },
    {
      id: 3,
      patientName: "Steve Rogers",
      doctorName: "Stephen House",
      appointmentDate: "13/05/2022",
      appointmentTime: "19h00",
      patology: ["Headache", " Stomachache"]
    },
    {
      id: 4,
      patientName: "Steve Rogers",
      doctorName: "Gregory House",
      appointmentDate: "12/09/2022",
      appointmentTime: "15h00",
      patology: ["Headache", " Stomachache"]
    }
    ]
  }
}