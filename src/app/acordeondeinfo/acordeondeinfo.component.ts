import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-acordeondeinfo',
  templateUrl: './acordeondeinfo.component.html',
  styleUrls: ['./acordeondeinfo.component.css']
})
export class AcordeondeinfoComponent implements OnInit {


  
  title: string = '' ;
  subtitulo1: string = '' ;
  descripcion1: string = '' ;
  subtitulo2: string = '' ;
  descripcion2: string = '' ;
  subtitulo3: string = '' ;
  descripcion3:string = '' ;
  subtitulo4: string = '' ;
  descripcion4:string = '' ;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
      console.log(portfolio);
      /* Almaceno en la variable de la linea 10 con todo lo que pongo aca abajo */
      /* Definir la info a mostrar */
      this.title = portfolio.title;
      this.subtitulo1 = portfolio.subtitulo1;
      this.descripcion1 = portfolio.descripcion1;
      this.subtitulo2 = portfolio.subtitulo2;
      this.descripcion2 = portfolio.descripcion2;
      this.subtitulo3 = portfolio.subtitulo3;
      this.descripcion3 = portfolio.descripcion3;
      this.subtitulo4 = portfolio.subtitulo4;
      this.descripcion4 = portfolio.descripcion4;
      
     
      
      });
    
      }
    }

