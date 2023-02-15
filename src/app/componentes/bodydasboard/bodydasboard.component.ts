import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ProyectosService } from '../../services/proyectos.service';
import { Habilidades } from 'src/app/model/habilidades';
import { Proyectos } from 'src/app/model/proyectos';
import { Experiencia } from 'src/app/model/experiencia';
import { Educacion } from 'src/app/model/educacion';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/model/persona';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-bodydasboard',
  templateUrl: './bodydasboard.component.html',
  styleUrls: ['./bodydasboard.component.css'],
})
export class BodydasboardComponent implements OnInit {
  perfil: Persona[] = [];
  proyecto: Proyectos[] = [];
  habilidad: Habilidades[] = [];
  estudios: Educacion[] = [];
  experiencias: Experiencia[] = [];
  educacion: any;
  id?:number;
  form: FormGroup; // el form es una variable

  constructor(
    private formbuilder: FormBuilder,
    private sPersona: PersonaService,
    private sEducacion: EducacionService,
    private sHabilidades: HabilidadesService,
    private sProyectos: ProyectosService,
    private sExperiencia: ExperienciaService
  ) {
    this.form = this.formbuilder.group({
      id: [''],
      titulo: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      institucion: [''],
      url_imagen: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.cargarEducacion();
    this.cargarHabilidad();
    this.cargarProyecto();
    this.cargarExperiencia();
    this.cargarPerfil();
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
  cargarPerfil(): void {
    this.sPersona.list().subscribe((data) => {
      this.perfil = data;
    });
  }

  borrarEdu(id: number) {
    this.sEducacion.borrar(id).subscribe(
      (data) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarEducacion();
        window.location.reload();
      },
      (error) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarEducacion();
        this.form.reset();
      }
    );
    window.location.reload();
  }
  borrarExp(id: number) {
    this.sExperiencia.borrar(id).subscribe(
      (data) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarExperiencia();
        window.location.reload();
      },
      (error) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarExperiencia();
        this.form.reset();
      }
    );
    window.location.reload();
  }
  borrarTrab(id: number) {
    this.sProyectos.borrar(id).subscribe(
      (data) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarProyecto();
      },
      (error) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarProyecto();
        this.form.reset();
      }
    );
    window.location.reload();
  }
  borrarSkill(id: number) {
    this.sHabilidades.borrar(id).subscribe(
      (data) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarHabilidad();
        window.location.reload();
      },
      (error) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarHabilidad();
        this.form.reset();
      }
    );
    window.location.reload();
  }
  
}
