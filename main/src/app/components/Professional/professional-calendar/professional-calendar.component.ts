import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-professional-calendar',
  templateUrl: './professional-calendar.component.html',
  styleUrls: ['./professional-calendar.component.css'],
})
export class ProfessionalCalendarComponent implements OnInit {
  @ViewChild("chartCanva", { static: true })
  element!: ElementRef;

  ngOnInit(): void {
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        labels: ['JAN', 'FEV', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            data: [10,20,30,40,50,60,70,80,90,100,110,120]
          }
        ]
      }
    }
      );

    
  }

}
