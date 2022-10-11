import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
 /* Asi no va */
  /* nombre = 'Nicolasa'; */

  /* Crear variable de instancia para almacenar datos que vienen del servicio */
 /* SE DEFINEN LAS VARIABLES DE INSTANCIA ANTES DEL CONSTRUCTOR */

  nombre: string = '';
  apellido:string = '' ;
  acerca:string = '' ;
titulo: any;

  constructor(
    /* Inyectar el servicio para tener acceso en la clase de los metodos*/
    private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
 this.portfolioService.getDatos().subscribe(portfolio => {
  console.log(portfolio);
  /* this.infoPortfolio=data.uno; */
  this.nombre =portfolio.nombre;
  this.apellido =portfolio.apellido;
  this.acerca =portfolio.acerca;
  });

  }
}