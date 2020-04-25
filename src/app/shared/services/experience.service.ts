import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ExpItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly experienceUrl = `${environment.databaseURL}/experience.json`;

  constructor(private http: HttpClient) { }

  create(experience: ExpItem) {
    return this.http.post(this.experienceUrl, experience);
  }
}
