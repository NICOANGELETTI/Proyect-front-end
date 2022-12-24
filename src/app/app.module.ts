import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { PortfolioService } from './services/portfolio.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { BodydasboardComponent } from './bodydasboard/bodydasboard.component';
import { NavbarsdasboardComponent } from './navbarsdasboard/navbarsdasboard.component';
import { LogoutComponent } from './modals/logout/logout.component';
import { RedesdashboardComponent } from './redesdashboard/redesdashboard.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { SocialbardashboardComponent } from './socialbardashboard/socialbardashboard.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { AcordeondeinfoComponent } from './acordeondeinfo/acordeondeinfo.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { Error404Component } from './error404/error404.component';
import { IndexComponent } from './index/index.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgregarExperienciaComponent } from './modals/experiencia-add/agregar-experiencia.component';
import { AgregarProyectoComponent } from './modals/proyecto-add/agregar-proyecto.component';
import { AgregarHabilidadesComponent } from './modals/habilidades-add/agregar-habilidades.component';
import { AgregarPerfilComponent } from './modals/perfil-add/agregar-perfil.component';
import { EducacionAddComponent } from './modals/educacion-add/educacion-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    HeaderComponent,
    PerfilComponent,
    HabilidadesComponent,
    FooterComponent,
    DashboardComponent,
    NavbarsdasboardComponent,
    LogoutComponent,
    BodydasboardComponent,
    RedesdashboardComponent,
    SocialbarComponent,
    SocialbardashboardComponent,
    FormContactComponent,
    AcordeondeinfoComponent,
    ProyectosComponent,
    Error404Component,
    IndexComponent,
    EducacionComponent,
    ExperienciaComponent,
    AgregarExperienciaComponent,
    AgregarProyectoComponent,
    AgregarHabilidadesComponent,
    AgregarPerfilComponent,
    EducacionAddComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule , ReactiveFormsModule,FormsModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
