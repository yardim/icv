import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { SkillsService } from 'src/app/shared/services/skills.service';

@Component({
  selector: 'app-main-skills-form',
  templateUrl: './main-skills-form.component.html',
  styleUrls: ['./main-skills-form.component.scss']
})
export class MainSkillsFormComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(private skillService: SkillsService) { }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  ngOnInit() {
    this.skillService.read()
      .subscribe(skills => {
        this.buildForm(skills);
      });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    this.skillService.create(this.form.value.skills)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe();
  }

  onAddSkill() {
    (this.form.get('skills') as FormArray).push(new FormControl('', Validators.required));
  }

  onRemoveSkill(i: number) {
    (this.form.get('skills') as FormArray).removeAt(i);
  }

  private buildForm(skills: string[]) {
    const controls: AbstractControl[] = [];

    for (const skill of skills) {
      const control = new FormControl(skill, Validators.required);
      controls.push(control);
    }

    this.form = new FormGroup({
      skills: new FormArray(controls)
    });
  }
}
