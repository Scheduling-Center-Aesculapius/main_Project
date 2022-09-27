import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links: any = new Array();

  constructor(public securirity: SecurityService) {}

  ngOnInit(): void {
    if (!this.securirity.logged) {
      this.links.push({ title: 'Home', route: 'home-patient' });
      this.links.push({ title: 'About', route: 'home-patient' });
      this.links.push({title: 'Professionals',route: '',});
      this.links.push({ title: 'Specialties', route: 'home-patient' });
      this.links.push({ title: 'Contact us', route: 'home-patient' });
      this.links.push({ title: 'Login', route: 'login-patient' });
      this.links.push({ title: 'Register', route: 'register-patient' });
    } else {
      this.links.push({ title: 'Home', route: 'home-patient' });
      this.links.push({ title: 'About', route: 'home-patient' });
      this.links.push({ title: 'Professionals', route: '' });
      this.links.push({ title: 'Specialties', route: 'home-patient' });
      this.links.push({ title: 'Contact us', route: 'home-patient' });
      this.links.push({ title: 'Olá, Bem vindo!', route: '---' });
    }
  }
}
