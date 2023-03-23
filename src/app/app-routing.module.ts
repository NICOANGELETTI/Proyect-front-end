import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
import { EducacionAddComponent } from './modals/educacion-add/educacion-add.component';

import { LoginComponent } from './modals/login/login.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { GuardGuard } from './services/guard.guard';
import { EditEducacionComponent } from './modals/edit-educacion/edit-educacion.component';
import { EditProyectoComponent } from './modals/edit-proyecto/edit-proyecto.component';
import { EditPerfilComponent } from './modals/edit-perfil/edit-perfil.component';

const routes: Routes = [
  //Rutas de mi proyecto
  // Al insertar la ruta acia me lleva a mi index
  { path: '', component: IndexComponent },

  //Ruta de Login
  { path: 'login', component: LoginComponent },
  //Ruta de dashboard con su respectivo "Guard" para proteger la ruta en caso de no estar logueado
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardGuard],
  },
  { path: 'educacion/update/:id', component: EditEducacionComponent },
  //Si ponemos una ruta incorrecta , nos manda a la pagina de Error404 (Pagina no encontrada)
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
