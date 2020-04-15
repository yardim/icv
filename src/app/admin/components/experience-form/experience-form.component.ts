import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {
  form: FormGroup;

  isTechnologiesExpanded = true;
  isResponsibilitiesExpanded = true;
  isProjectsExpanded = true;

  get jobs() {
    return this.form.get('jobs') as FormArray;
  }

  constructor() { }

  getGeneralTechnologies(jobIndex: number) {
    return (this.jobs.controls[jobIndex] as FormGroup).get('generalTechnologies') as FormArray;
  }

  getGeneralResponsibilities(jobIndex: number) {
    return (this.jobs.controls[jobIndex] as FormGroup).get('generalResponsibilities') as FormArray;
  }

  getProjects(jobIndex: number) {
    return (this.jobs.controls[jobIndex] as FormGroup).get('projects') as FormArray;
  }

  getProjectTechnologies(jobIndex: number, projectIndex: number) {
    return (this.getProjects(jobIndex).controls[projectIndex] as FormGroup)
      .get('projectTechnologies') as FormArray;
  }

  getProjectResponsibilities(jobIndex: number, projectIndex: number) {
    return (this.getProjects(jobIndex).controls[projectIndex] as FormGroup)
      .get('projectResponsibilities') as FormArray;
  }

  addJob() {
    const job = new FormGroup({
      position: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      company: new FormControl(null),
      generalTechnologies: new FormArray([]),
      generalResponsibilities: new FormArray([]),
      projects: new FormArray([])
    });

    this.jobs.push(job);
  }

  onAddJobTechnology(jobIndex: number) {
    this.getGeneralTechnologies(jobIndex).push(new FormControl(null));
  }

  onAddJobResponsibility(jobIndex: number) {
    this.getGeneralResponsibilities(jobIndex).push(new FormControl(null));
  }

  onAddProject(jobIndex: number) {
    const project = new FormGroup({
      projectName: new FormControl(null),
      projectTechnologies: new FormArray([]),
      projectResponsibilities: new FormArray([])
    });

    this.getProjects(jobIndex).push(project);
  }

  onAddProjectTechnology(jobIndex: number, projectIndex: number) {
    this.getProjectTechnologies(jobIndex, projectIndex).push(new FormControl(null));
  }

  onAddProjectResponsibility(jobIndex: number, projectIndex: number) {
    this.getProjectResponsibilities(jobIndex, projectIndex).push(new FormControl(null));
  }

  ngOnInit() {
    this.form = new FormGroup({
      jobs: new FormArray([])
    });
  }

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
