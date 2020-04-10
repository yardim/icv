import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTOR_PROVIDER } from './services/auth.interceptor';
import { AuthService } from './services/auth.service';
import { SkillsService } from './services/skills.service';
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
  providers: [AuthService, SkillsService, HTTP_INTERCEPTOR_PROVIDER],
})
export class SharedModule { }
