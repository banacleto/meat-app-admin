import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { content } from "./shared/routes/content-routes";

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
