import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {
  isTechnologiesExpanded = false;
  isResponsibilitiesExpanded = false;
  isProjectsExpanded = false;

  constructor() { }

  ngOnInit(): void { }

  toggleTechnologies() {
    this.isTechnologiesExpanded = !this.isTechnologiesExpanded;
  }

  toggleResponsibilities() {
    this.isResponsibilitiesExpanded = !this.isResponsibilitiesExpanded;
  }

  toggleProjects() {
    this.isProjectsExpanded = !this.isProjectsExpanded;
  }
}
