import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  perfil: Perfil[] = [];

  constructor(
    /* Inyectar el servicio para tener acceso en la clase de los metodos*/
    private  sPerfil: PerfilService
  ) {}

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    
      this.cargarPerfil();
    }
    cargarPerfil(): void {
      this.sPerfil.list().subscribe((data) => {
        this.perfil = data;
      });
    }
    };
  

