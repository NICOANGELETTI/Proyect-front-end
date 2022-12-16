import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Educacion } from '../model/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  informaciones: any = [];
  
  educacion: any = [];
  id: string = '';
  inicio: string = '';
  fin: string = '';
  titulo: string = '';
  organismo: string = '';
  imagen: string = '';

  experiencias: Educacion[] = [];
  //Video Express 18
  constructor(private portfolioService: PortfolioService) {}

  //Video Express 18
  //constructor(private sExperiencia: ExperienciaService) {}
  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe((portfolio) => {
      console.log(portfolio);
      /* Almaceno en la variable de la linea 10 con todo lo que pongo aca abajo */
      /* Definir la info a mostrar */
      this.educacion = portfolio.educacion;
      this.informaciones = portfolio.informaciones;
    });
  }
}