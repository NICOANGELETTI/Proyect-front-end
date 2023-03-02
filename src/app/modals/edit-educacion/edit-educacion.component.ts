import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from '../../services/educacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Habilidades } from '../../model/habilidades';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent implements OnInit {
  //Declaramos
  form:FormGroup;
  edu:Educacion;

  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private sEducacion: EducacionService,
    private formBuilder: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    //Realizamos formulario reactivo
    this.form = this.formBuilder.group({
       //Realizamos Formulario Reactivo con sus campos requeridos
      id: [''],
      titulo: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      url_imagen: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { 
  
 }
  get tituloCurso() {
    return this.form.get('titulo');
  }

  get inicioCurso() {
    return this.form.get('inicio');
  }

  get finCurso() {
    return this.form.get('fin');
  }

  get institucionCurso() {
    return this.form.get('institucion');
  }
  get urlCurso() {
    return this.form.get('url_imagen');
  }
  get idCurso() {
    return this.form.get('id');
  }

  //Realizamos metodo de agregar el estudio correspondiente trayendo del servicio el metodo correspondiente al Backend
  cargarEducacion(): void {
   
    this.sEducacion.agregarEstudio(this.form.value).subscribe(
      (data) => {
        //Pestaña de alerta para avisarnos lo realizado
        alert('Nuevo Curso agregado');
        window.location.reload();
      },
      (error) => {
        //Pestaña de alerta para avisarnos que no se concreto la peticion
        alert('Se ha producido un error, intente nuevamente');
      }
    );
  }

  onUpdate():void{
    this.sEducacion.edit(this.form.value).subscribe(data => {
      alert("Estudio modificado.");
      this.router.navigate(['']);
    }
    )
  }

  /* */
  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}
