import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FrontLayoutComponent } from './components/front-layout/front-layout.component';
import { FrontRoutingModule } from './front-routing.module';
import { FrontMainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [FrontMainComponent, FrontLayoutComponent],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
