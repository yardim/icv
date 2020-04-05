import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() size = 16;
  @HostBinding('style.fontSize') fontSize: string;

  constructor() {}

  ngOnInit() {
    this.fontSize = this.size / 4 + 'px';
  }
}
