import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpItem } from 'src/app/shared/models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs: ExpItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.jobs = [
      {
        id: '1',
        position: 'Front-End developer',
        company: 'Ronis BT',
        startDate: new Date(2014, 6),
        endDate: new Date(2015, 3)
      },
      {
        id: '2',
        position: 'Front-End developer',
        company: 'Brander Studio',
        startDate: new Date(2015, 4),
        endDate: new Date(2016, 9)
      },
      {
        id: '3',
        position: 'Front-End developer',
        company: 'Zfort Group',
        startDate: new Date(2016, 10),
        endDate: new Date(2017, 11)
      },
    ];
  }

  onAddJob() {
    this.router.navigate(['/', 'admin', 'experience', 'new']);
  }
}
