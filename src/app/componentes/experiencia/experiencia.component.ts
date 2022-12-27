import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Experiencia } from '../../model/experiencia';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];
  constructor(private sExperiencia: ExperienciaService) {}

  ngOnInit(): void {
    this.cargarExperiencia();
  }
  //Metodo cargar experiencia de tipo VOID(Sin retorno).
  //sExperiencia es el alias.This se utiliza para referenciar fuera del metodo.
  //experiencias hace referencia al alias de la lista Experiencia[] = []; data es un alias. entonces
  //esa lista nos va traer informacion (data) que se le vamos a mandar a experiencias (Experiencia[] = [];)
  //Luego mandamos al ngOnInit como mostramos arriba.
  cargarExperiencia(): void {
    this.sExperiencia.list().subscribe((data) => {
      this.experiencias = data;
    });
  }
}
