import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.local';
import { SkillsResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsId: string;
  private readonly skillsUrl = `${environment.databaseURL}/skills.json`;

  constructor(private http: HttpClient) { }

  create(skills: string[]) {
    if (this.skillsId) {
      return this.update(skills);
    }

    return this.http.post(this.skillsUrl, skills);
  }

  read() {
    return this.http.get<SkillsResponse>(`${environment.databaseURL}/skills.json`)
      .pipe(
        map(response => {
          let skills: string[] = [];

          for (const id of Object.keys(response)) {
            this.skillsId = id;

            skills = [
              ...skills,
              ...response[id]
            ];
          }

          return skills;
        })
      );
  }

  update(skills: string[]) {
    return this.http.patch(this.skillsUrl, { [this.skillsId]: skills });
  }
}
