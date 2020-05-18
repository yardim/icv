import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  @HostBinding('class.is-loaded') isLoaded: boolean;
  @ViewChild('specialtyTyper') specialtyTyper: ElementRef;

  private typedRef: Typed;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    });
  }

  ngAfterViewInit() {
    this.typedRef = new Typed(this.specialtyTyper.nativeElement, {
      strings: ['Markup', 'JavaScript', 'Angular', 'Front-End Developer'],
      typeSpeed: 40,
      startDelay: 4200,
      showCursor: true
    });
  }
}
