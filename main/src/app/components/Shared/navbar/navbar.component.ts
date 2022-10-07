import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links: any = new Array();

  constructor(public security: SecurityService) {}

  ngOnInit(): void {
    if (!this.security.logged) {
      this.links.push({ title: 'Home', route: ''});
      this.links.push({title: 'Professionals',route: 'register-professional',});
      this.links.push({ title: 'Login', route: 'login-patient' });
      this.links.push({ title: 'Register', route: 'register-patient' });
      this.links.push({ title: 'Admin', route: 'login-admin' });
    } else {
      this.links.push({ title: 'Home', route: 'home-patient' });
      this.links.push({title: 'Professionals',route: '',});
      this.links.push({ title: 'Contact us', route: 'home-patient' });
      this.links.push({ title: 'Login', route: 'login-patient' });
      this.links.push({ title: 'Register', route: 'register-patient' });
      this.links.push({ title: 'Logout', route: '' });
    }
  }
}
