import { Component, HostBinding, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent implements OnChanges {
  @Input() active = false;
  @HostBinding('class.active') class = this.active;

  constructor() { }

  ngOnChanges() {
    this.class = this.active;
  }
}
