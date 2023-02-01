import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
import { EducacionAddComponent } from './modals/educacion-add/educacion-add.component';

import { LoginComponent } from './modals/login/login.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, //Si no pongo nada me manda a "/" que es index.html

  {
    path: 'dashboard',
    component: DashboardComponent,
    
  }, // Si pongo dashboard me manda a Dashboard.component
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
