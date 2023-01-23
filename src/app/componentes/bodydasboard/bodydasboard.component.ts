import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ProyectosService } from '../../services/proyectos.service';
import { Habilidades } from 'src/app/model/habilidades';
import { Proyectos } from 'src/app/model/proyectos';
import { Experiencia } from 'src/app/model/experiencia';
import { Educacion } from 'src/app/model/educacion';


@Component({
  selector: 'app-bodydasboard',
  templateUrl: './bodydasboard.component.html',
  styleUrls: ['./bodydasboard.component.css']
})
export class BodydasboardComponent implements OnInit {
  
  proyecto: Proyectos[] = [];
  habilidad: Habilidades[] = [];
  estudios: Educacion[] = [];
  experiencias: Experiencia[] = [];
  constructor(private sEducacion: EducacionService,
              private sHabilidades: HabilidadesService,
              private sProyectos:ProyectosService,
              private sExperiencia:ExperienciaService) { }

  ngOnInit(): void {
    this.cargarEducacion();
    this.cargarHabilidad();
    this.cargarProyecto();
    this.cargarExperiencia();
  }
  cargarEducacion(): void {
    this.sEducacion.list().subscribe((data) => {
      this.estudios = data;
    });
  }

  cargarHabilidad(): void {
    this.sHabilidades.list().subscribe((data) => {
      this.habilidad = data;
    });
  }
  cargarProyecto(): void {
    this.sProyectos.list().subscribe((data) => {
      this.proyecto = data;
    });
  }
  cargarExperiencia(): void {
    this.sExperiencia.list().subscribe((data) => {
      this.experiencias = data;
    });
  }
  }


