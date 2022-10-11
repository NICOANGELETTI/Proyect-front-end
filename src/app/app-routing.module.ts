import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ProyectoPortfolioapComponent } from './proyecto.portfolioap/proyecto.portfolioap.component';

const routes: Routes = [
  {path: 'proyecto.portfolioap', component:ProyectoPortfolioapComponent },
  {path: 'dashboard', component:DashboardComponent }, // Si pongo dashboard me manda a Dashboard.component
  {path: '', redirectTo: '/proyecto.portfolioap', pathMatch:'full'}, //Si no pongo nada me manda a "/" que es index.html 
  {path:'**' , component:ErrorComponent } // Si pongo cualquier cosa me manda a la pagina de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
