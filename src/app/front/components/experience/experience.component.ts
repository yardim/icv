import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { ExpItem } from 'src/app/shared/models';
import { ExperienceService } from 'src/app/shared/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Output() dataLoad = new EventEmitter();
  @Output() itemExpanded = new EventEmitter();

  experienceItems: ExpItem[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.getList()
      .pipe(
        map(this.mapExperienceData)
      )
      .subscribe((experienceItems: ExpItem[]) => {
        this.experienceItems = experienceItems;
        this.dataLoad.emit();
      });
  }

  onToggle(index: number) {
    this.experienceItems[index].isExpanded = !this.experienceItems[index].isExpanded;
    this.itemExpanded.emit();
  }

  private mapExperienceData(experienceItems: ExpItem[]) {
    return experienceItems.map(experienceItem => ({ ...experienceItem, isExpanded: false }));
  }
}
