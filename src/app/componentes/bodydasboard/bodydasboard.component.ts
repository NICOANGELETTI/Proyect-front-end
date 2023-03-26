import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ProyectosService } from '../../services/proyectos.service';
import { Habilidades } from 'src/app/model/habilidades';
import { Proyectos } from 'src/app/model/proyectos';
import { Experiencia } from 'src/app/model/experiencia';
import { Educacion } from 'src/app/model/educacion';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PerfilService } from '../../services/perfil.service';
import { Perfil } from '../../model/perfil';
@Component({
  selector: 'app-bodydasboard',
  templateUrl: './bodydasboard.component.html',
  styleUrls: ['./bodydasboard.component.css'],
})
export class BodydasboardComponent implements OnInit {
  perfil: Perfil[] = [];
  proyecto: Proyectos[] = [];
  habilidad: Habilidades[] = [];
  educacion: Educacion[] = [];
  experiencias: Experiencia[] = [];
  
  
  form: FormGroup; // el form es una variable

  constructor(
    private formbuilder: FormBuilder,
    private sPerfil: PerfilService,
    private sEducacion: EducacionService,
    private sHabilidades: HabilidadesService,
    private sProyectos: ProyectosService,
    private sExperiencia: ExperienciaService
  ) {
    
  }

  ngOnInit(): void {
    //Realizamos la carga en el dashboard de cada seccion
    this.cargarEducacion();

    this.cargarHabilidad();

    this.cargarProyecto();

    this.cargarExperiencia();

    this.cargarPerfil();

    
  }

  //Implementamos los metodos para traer del back la lista de todas las secciones

  cargarEducacion(): void {
    this.sEducacion.list().subscribe((data) => {
      this.educacion = data;
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
    this.sPerfil.list().subscribe((data) => {
      this.perfil = data;
    });
  }

  //Implementamos los metodos "Borrar" para traer el metodo del Servicio para lograr Borrar por ID

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
    
  }
  borrarExp(id: number) {
    this.sExperiencia.borrar(id).subscribe(
      (data) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarExperiencia();
        window.location.reload();
      },
      (error) => {
        alert('no se pudo eliminar');
      
      }
    );
 
  }
  borrarTrab(id: number) {
    this.sProyectos.borrar(id).subscribe(
      (data) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarProyecto();
      },
      (error) => {
        alert('no se pudo eliminar ');
        
      }
    );
   
  }
  borrarSkill(id: number) {
    this.sHabilidades.borrar(id).subscribe(
      (data) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarHabilidad();
        window.location.reload();
      },
      (error) => {
        alert('no se pudo eliminar');
        
      }
    );
   
  }
  borrarPerfil(id: number) {
    this.sPerfil.borrar(id).subscribe(
      (data) => {
        alert('se pudo eliminar satisfactoriamente');
        this.cargarHabilidad();
        window.location.reload();
      },
      (error) => {
        alert('no se pudo eliminar ');
       
      }
    );
   
  }

 
}
