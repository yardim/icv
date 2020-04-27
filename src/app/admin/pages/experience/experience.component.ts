import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpItem } from 'src/app/shared/models';
import { ExperienceService } from 'src/app/shared/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs: ExpItem[];
  isLoading = false;

  constructor(
    private router: Router,
    private experienceService: ExperienceService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.experienceService.getList()
      .subscribe((resp: ExpItem[]) => {
        this.jobs = resp;
        this.isLoading = false;
      });
  }

  onAddJob() {
    this.router.navigate(['/', 'admin', 'experience', 'new']);
  }
}
