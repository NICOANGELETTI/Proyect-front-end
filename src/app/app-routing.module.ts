import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent  }, //Si no pongo nada me manda a "/" que es index.html
  { path: 'index', component: IndexComponent },
  { path: 'dashboard', component: DashboardComponent }, // Si pongo dashboard me manda a Dashboard.component
  {
    path: '**', component: Error404Component , 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
