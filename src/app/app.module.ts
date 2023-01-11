import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { PortfolioService } from './services/portfolio.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

import { BodydasboardComponent } from './componentes/bodydasboard/bodydasboard.component';
import { NavbarsdasboardComponent } from './componentes/navbarsdasboard/navbarsdasboard.component';
import { LogoutComponent } from './modals/logout/logout.component';
import { RedesdashboardComponent } from './componentes/redesdashboard/redesdashboard.component';
import { SocialbarComponent } from './componentes/socialbar/socialbar.component';
import { SocialbardashboardComponent } from './componentes/socialbardashboard/socialbardashboard.component';
import { FormContactComponent } from './componentes/form-contact/form-contact.component';
import { AcordeondeinfoComponent } from './componentes/acordeondeinfo/acordeondeinfo.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgregarExperienciaComponent } from './modals/experiencia-add/agregar-experiencia.component';
import { AgregarProyectoComponent } from './modals/proyecto-add/agregar-proyecto.component';
import { AgregarHabilidadesComponent } from './modals/habilidades-add/agregar-habilidades.component';
import { AgregarPerfilComponent } from './modals/perfil-add/agregar-perfil.component';
import { EducacionAddComponent } from './modals/educacion-add/educacion-add.component';
import { PersonaService } from './services/persona.service';
import { InterceptorService } from './services/interceptor.service';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [PortfolioService, 
              PersonaService,{provide: HTTP_INTERCEPTORS,useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
