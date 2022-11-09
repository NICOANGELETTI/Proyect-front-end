import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectos: any = [];


  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe((portfolio) => {
      console.log(portfolio);
      /* Almaceno en la variable de la linea 10 con todo lo que pongo aca abajo */
      /* Definir la info a mostrar */
      this.proyectos = portfolio.proyectos;
     
    });
  }

  
}

