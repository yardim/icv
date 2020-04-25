import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {
  form: FormGroup;

  isTechnologiesExpanded = false;
  isResponsibilitiesExpanded = false;
  isProjectsExpanded = false;

  constructor() { }

  getGeneralTechnologies() {
    return this.form.get('generalTechnologies') as FormArray;
  }

  getGeneralResponsibilities() {
    return this.form.get('generalResponsibilities') as FormArray;
  }

  getProjects() {
    return this.form.get('projects') as FormArray;
  }

  getProjectTechnologies(projectIndex: number) {
    return (this.getProjects().controls[projectIndex] as FormGroup)
      .get('projectTechnologies') as FormArray;
  }

  getProjectResponsibilities(projectIndex: number) {
    return (this.getProjects().controls[projectIndex] as FormGroup)
      .get('projectResponsibilities') as FormArray;
  }

  onAddJobTechnology() {
    this.getGeneralTechnologies().push(new FormControl(null, Validators.required));
  }

  onAddJobResponsibility() {
    this.getGeneralResponsibilities().push(new FormControl(null, Validators.required));
  }

  onAddProject() {
    const project = new FormGroup({
      projectName: new FormControl(null, Validators.required),
      projectTechnologies: new FormArray([]),
      projectResponsibilities: new FormArray([])
    });

    this.getProjects().push(project);
  }

  onAddProjectTechnology(projectIndex: number) {
    this.getProjectTechnologies(projectIndex).push(new FormControl(null, Validators.required));
  }

  onAddProjectResponsibility(projectIndex: number) {
    this.getProjectResponsibilities(projectIndex).push(new FormControl(null, Validators.required));
  }

  ngOnInit() {
    this.form = new FormGroup({
      position: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      generalTechnologies: new FormArray([]),
      generalResponsibilities: new FormArray([]),
      projects: new FormArray([])
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

  getBtnTooltip(sectionName: string) {
    return `Toggle ${sectionName} Section`;
  }
}