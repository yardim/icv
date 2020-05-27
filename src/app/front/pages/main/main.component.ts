import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class FrontMainComponent implements OnInit {
  fpNav: HTMLElement;
  fullpageConfig: any;
  fullpageApi: any;

  constructor() { }

  ngOnInit(): void {
    this.fullpageConfig = {
      navigation: true,
      anchors: ['main-page', 'main-skills', 'experience-page'],
      scrollOverflow: true,
      scrollOverflowOptions: {
        fadeScrollbars: true
      },
      afterRender: () => {
       this.fpNav = document.querySelector('#fp-nav');
      },
      afterLoad: (origin: any, destination: any) => {
        destination.item.classList.add('visited');
      },
      onLeave: (origin: any, destination: any) => {
        if (destination.index === 0) {
          this.fpNav.classList.remove('dark');
          return;
        }

        this.fpNav.classList.add('dark');
      }
    };
  }

  getRef(fullPageRef: any) {
    this.fullpageApi = fullPageRef;
  }

  onExperienceLoaded() {
    setTimeout(() => {
      this.fullpageApi.reBuild();
    });
  }
}
