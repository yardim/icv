import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/layout/layout.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'main', canActivate: [AdminGuard] },
      { path: 'main', component: MainComponent, canActivate: [AdminGuard] },
      { path: 'experience', component: ExperienceComponent, canActivate: [AdminGuard] },
      { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
