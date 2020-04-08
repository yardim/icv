import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
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
  ],
  providers: [AuthService],
})
export class SharedModule { }
