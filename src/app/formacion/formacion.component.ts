import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  informaciones: any = [];
  experiencias: any = [];
  educacion: any = [];
   id: string = '' ;
   inicio: string = '' ;
   fin: string = '' ;
   titulo: string = '' ;
   empresa:string = '' ;
   organismo: string = '' ;
   imagen: string = '' ;
   

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
      console.log(portfolio);
      /* Almaceno en la variable de la linea 10 con todo lo que pongo aca abajo */
      /* Definir la info a mostrar */
      this.educacion =portfolio.educacion;
      this.experiencias =portfolio.experiencias;
      this.informaciones=portfolio.informaciones
      });
    
      }
    }
