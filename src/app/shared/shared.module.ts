import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PlusComponent } from './icons/plus/plus.component';
import { RemoveComponent } from './icons/remove/remove.component';
import { HTTP_INTERCEPTOR_PROVIDER } from './services/auth.interceptor';
import { AuthService } from './services/auth.service';
import { ExperienceService } from './services/experience.service';
import { SkillsService } from './services/skills.service';
import { SpinnerComponent } from './spinner/spinner.component';

const ownExport = [
  SpinnerComponent,
  PlusComponent,
  RemoveComponent,
];

const reexport = [
  CommonModule,
  HttpClientModule
];

@NgModule({
  declarations: [
    ...ownExport,
  ],
  exports: [
    ...ownExport,
    ...reexport,
  ],
  imports: [
    ...reexport
  ],
  providers: [AuthService, SkillsService, HTTP_INTERCEPTOR_PROVIDER, ExperienceService],
})
export class SharedModule { }
