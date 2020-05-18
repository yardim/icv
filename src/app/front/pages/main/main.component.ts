import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class FrontMainComponent implements OnInit {
  fullpageConfig: any;
  fullpageApi: any;

  constructor() { }

  ngOnInit(): void {
    this.fullpageConfig = {
      navigation: true,
      anchors: ['main-page', 'main-skills', 'experience-page'],
      afterLoad: (origin, destination, direction) => { }
    };
  }

  getRef(fullPageRef: any) {
    this.fullpageApi = fullPageRef;
  }
}
