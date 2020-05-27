import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpItem } from 'src/app/shared/models';
import { ExperienceService } from 'src/app/shared/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Output() dataLoad = new EventEmitter();

  experienceData: ExpItem[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.getList()
      .subscribe((experienceData: ExpItem[]) => {
        this.experienceData = experienceData;
        this.dataLoad.emit();
        console.log(this.experienceData);
      });
  }
}
