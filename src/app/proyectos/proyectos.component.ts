import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyectos[] = [];

  constructor(private sProyectos: ProyectosService) {}

  ngOnInit(): void {
    this.cargarProyecto();
  }
  cargarProyecto(): void {
    this.sProyectos.list().subscribe((data) => {
      this.proyecto = data;
    });
  }
}
