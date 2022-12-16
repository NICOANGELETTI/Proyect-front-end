import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  trabajos: any = [];
  inicio: string = '';
  fin: string = '';
  titulo: string = '';
  empresa: string = '';
  imagen: string = '';

  experiencias: Experiencia[] = [];
  constructor(private portfolioService: PortfolioService) {}

  //Video Express 18
  //constructor(private sExperiencia: ExperienciaService) {}
  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe((portfolio) => {
      console.log(portfolio);
      /* Almaceno en la variable de la linea 10 con todo lo que pongo aca abajo */
      /* Definir la info a mostrar */
    
      this.trabajos = portfolio.trabajos;
     
    });
  }
}
