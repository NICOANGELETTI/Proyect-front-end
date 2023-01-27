import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Persona } from '../../model/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  perfil: Persona[] = [];

  constructor(
    /* Inyectar el servicio para tener acceso en la clase de los metodos*/
    private  sPersona: PersonaService
  ) {}

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    
      this.cargarPerfil();
    }
    cargarPerfil(): void {
      this.sPersona.list().subscribe((data) => {
        this.perfil = data;
      });
    }
    };
  

