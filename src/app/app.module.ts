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
import { FormacionComponent } from './formacion/formacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';

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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    HeaderComponent,
    PerfilComponent,
    FormacionComponent,
    HabilidadesComponent,
    FooterComponent,
    DashboardComponent,
    IntroComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
