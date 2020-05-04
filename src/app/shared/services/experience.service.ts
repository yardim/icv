import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExpItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly experienceUrl = `${environment.databaseURL}/experience.json`;
  private readonly jobUrl = `${environment.databaseURL}/experience`;

  constructor(private http: HttpClient) { }

  create(experience: ExpItem) {
    return this.http.post(this.experienceUrl, experience);
  }

  getList() {
    return this.http.get<{ [key: string]: ExpItem }>(this.experienceUrl)
      .pipe(
        map((resp: { [key: string]: ExpItem }) => {
          const expItems: ExpItem[] = [];

          for (const id of Object.keys(resp)) {
            expItems.push({
              ...resp[id],
              id
            });
          }

          return expItems;
        })
      );
  }

  getJob(id: string) {
    return this.http.get<ExpItem>(`${this.jobUrl}/${id}.json`)
      .pipe(
        map(expItem => ({ ...expItem, id }))
      );
  }

  update(id: string, experience: ExpItem) {
    return this.http.put(`${this.jobUrl}/${id}.json`, experience);
  }

  removeJob(id: string) {
    return this.http.delete(`${this.jobUrl}/${id}.json`);
  }
}
