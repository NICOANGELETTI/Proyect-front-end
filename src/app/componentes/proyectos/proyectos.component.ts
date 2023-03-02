import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Proyectos } from '../../model/proyectos';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyectos[] = [];

  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private sProyectos: ProyectosService) {}

  ngOnInit(): void {
    //Implementamos el metodo
    this.cargarProyecto();
  }
  //Realizamos el metodo para traer la lista de proyectos del Backend
  cargarProyecto(): void {
    this.sProyectos.list().subscribe((data) => {
      this.proyecto = data;
    });
  }
}
