import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './components/layout/layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AdminGuard } from './services/admin.guard';
import { MainSkillsFormComponent } from './components/main-skills-form/main-skills-form.component';

@NgModule({
  declarations: [LoginComponent, AdminLayoutComponent, MainComponent, LoginFormComponent, MainSkillsFormComponent],
  imports: [
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdminGuard]
})
export class AdminModule { }
