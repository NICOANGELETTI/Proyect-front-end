import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Habilidades } from '../../model/habilidades';
import { HabilidadesService } from '../../services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private sHabilidades: HabilidadesService) {}
   //Declaramos  
  habilidad: Habilidades[] = [];
  ngOnInit(): void {
    this.cargarHabilidad();
  }
//Realizo metodo para traer la lista de habilidades del backend
  cargarHabilidad(): void {
    this.sHabilidades.list().subscribe((data) => {
      this.habilidad = data;
    });
  }
}
