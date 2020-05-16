import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { SharedModule } from '../shared/shared.module';
import { FrontLayoutComponent } from './components/front-layout/front-layout.component';
import { MainSkillsComponent } from './components/main-skills/main-skills.component';
import { FrontRoutingModule } from './front-routing.module';
import { FrontMainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [FrontMainComponent, FrontLayoutComponent, MainSkillsComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedModule,
    AngularFullpageModule
  ]
})
export class FrontModule { }
