import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ExpItem, Project } from 'src/app/shared/models';
import { ExperienceService } from 'src/app/shared/services/experience.service';

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
  isLoading = false;
  isLoadingForm = false;

  private jobId = 'new';

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

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

  onRemoveTechnology(generalTechIndex: number) {
    this.getGeneralTechnologies().removeAt(generalTechIndex);
  }

  onAddJobResponsibility() {
    this.getGeneralResponsibilities().push(new FormControl(null, Validators.required));
  }

  onRemoveResponsibility(generalRespIndex: number) {
    this.getGeneralResponsibilities().removeAt(generalRespIndex);
  }

  onAddProject() {
    const project = new FormGroup({
      projectName: new FormControl(null, Validators.required),
      projectTechnologies: new FormArray([]),
      projectResponsibilities: new FormArray([])
    });

    this.getProjects().push(project);
  }

  onRemoveProject(projectIndex: number) {
    this.getProjects().removeAt(projectIndex);
  }

  onAddProjectTechnology(projectIndex: number) {
    this.getProjectTechnologies(projectIndex).push(new FormControl(null, Validators.required));
  }

  onRemoveProjectTechnology(projectIndex: number, techIndex: number) {
    this.getProjectTechnologies(projectIndex).removeAt(techIndex);
  }

  onAddProjectResponsibility(projectIndex: number) {
    this.getProjectResponsibilities(projectIndex).push(new FormControl(null, Validators.required));
  }

  onRemoveProjectResponsibility(projectIndex: number, respIndex: number) {
    this.getProjectResponsibilities(projectIndex).removeAt(respIndex);
  }

  ngOnInit() {
    this.jobId = this.activatedRoute.snapshot.params.id;

    if (this.jobId === 'new') {
      this.form = this.createForm();
      return;
    }

    this.isLoadingForm = true;
    this.experienceService.getJob(this.jobId)
      .pipe(
        finalize(() => this.isLoadingForm = false)
      )
      .subscribe((resp: ExpItem) => {
        this.form = this.createForm(resp);
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

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;

    if (this.jobId === 'new') {
      this.experienceService.create(this.form.value)
        .subscribe(() => this.finish());

      return;
    }

    this.experienceService.update(this.jobId, this.form.value)
      .subscribe(() => this.finish());
  }

  private createForm(experience?: ExpItem) {
    return new FormGroup({
      position: new FormControl(experience?.position, Validators.required),
      startDate: new FormControl(experience?.startDate, Validators.required),
      endDate: new FormControl(experience?.endDate, Validators.required),
      company: new FormControl(experience?.company, Validators.required),
      generalTechnologies: new FormArray(this.createControlsArray(experience?.generalTechnologies)),
      generalResponsibilities: new FormArray(this.createControlsArray(experience?.generalResponsibilities)),
      projects: new FormArray(this.createProjectsControls(experience?.projects))
    });
  }

  private createProjectsControls(projects?: Project[]) {
    if (!projects?.length) {
      return [];
    }

    return projects.map(project => {
      return new FormGroup({
        projectName: new FormControl(project.projectName, Validators.required),
        projectTechnologies: new FormArray(this.createControlsArray(project.projectTechnologies)),
        projectResponsibilities: new FormArray(this.createControlsArray(project.projectResponsibilities))
      });
    });
  }

  private createControlsArray(values?: string[]) {
    if (!values?.length) {
      return [];
    }

    return values.map(tech => new FormControl(tech, Validators.required));
  }

  private finish() {
    this.isLoading = false;
    this.router.navigate(['/', 'admin', 'experience']);
  }
}
