import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';

const ownExport = [
  SpinnerComponent,
];

const reexport = [
  CommonModule,
  HttpClientModule
];

@NgModule({
  declarations: [
    ...ownExport
  ],
  exports: [
    ...ownExport,
    ...reexport,
  ],
  imports: [
    ...reexport
  ]
})
export class SharedModule { }
