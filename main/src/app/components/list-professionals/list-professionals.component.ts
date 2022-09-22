import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professionals } from 'src/app/models/professionals.model';
import { ProfessionalsService } from 'src/app/services/professionals.service';

@Component({
  selector: 'app-list-professionals',
  templateUrl: './list-professionals.component.html',
  styleUrls: ['./list-professionals.component.css']
})

export class ListProfessionalsComponent implements OnInit {
  professionals: Professionals[] = []
  route: any;
  constructor(private prof: ProfessionalsService, route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: { "": { [x: string]: any; }; searchItem: string; }) =>{
      if(params.['searchItem'])
      this.professionals = this.prof.getAll().filter(professional => professional.name.toLowerCase().includes(params.searchItem.toLowerCase())); 
      else 
      this.professionals = this.prof.getAll();
    })
  }

}
