import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { AdminLayoutComponent } from './components/layout/layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainSkillsFormComponent } from './components/main-skills-form/main-skills-form.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AdminGuard } from './services/admin.guard';

@NgModule({
  declarations: [
    LoginComponent,
    AdminLayoutComponent,
    MainComponent,
    LoginFormComponent,
    MainSkillsFormComponent,
    ExperienceComponent,
    ExperienceFormComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot({ 'show-delay': 300, 'tooltip-class': 'app-tooltip' }),
    DpDatePickerModule
  ],
  providers: [AdminGuard]
})
export class AdminModule { }
