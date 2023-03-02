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
    //Inyectamos en Constructor los Servicios que usaremos
    private  sPerfil: PerfilService
  ) {}

  ngOnInit(): void {


    //Cargamos perfil
      this.cargarPerfil();
    }

    //Realizamos el metodo para traer la lista del backend de Perfil
    cargarPerfil(): void {
      this.sPerfil.list().subscribe((data) => {
        this.perfil = data;
      });
    }
    };
  

