export class Appointments {
    id!: number;
    patientName!: string;
    doctorName!:string;
    appointmentDate!:string;
    appointmentTime!:string;
    patology?: string[];
}