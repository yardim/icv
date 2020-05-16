import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/shared/services/skills.service';

@Component({
  selector: 'app-main-skills',
  templateUrl: './main-skills.component.html',
  styleUrls: ['./main-skills.component.scss']
})
export class MainSkillsComponent implements OnInit {
  skills: string[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.loadSkills();
  }

  private loadSkills() {
    if (this.skills) {
      return;
    }

    this.skillsService.read()
      .subscribe(skills => {
        this.skills = skills;
      });
  }
}
