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
  titulo: '';
  inicio: '';
  fin: '';
  institucion: '';
  url_imagen: '';
  
  
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
  




  /*onUpdate(): void{
    let edu = this.form.value;
    this.sEducacion.update(edu.id, edu).subscribe(
      data => {
        alert('Educacion editada correctamente');
        window.location.reload();
        this.form.reset();
      },
      error => {
        alert('Falló al editar la Educacion, intente nuevamente');
        window.location.reload();
        this.form.reset();
      })
  }
  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      window.location.reload();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
      window.location.reload();
    }
  }*/

  

  //👇 esto es solo para hacer pruebas en local
  /*cargarDetalle(id: number){
    this.sEducacion.getById(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }
  guardar() {
    console.log("FUNCIONA!!!")
    let edu = this.form.value;
    console.log()

    if (edu.id == '') {
      this.sEducacion.agregarEstudio(edu).subscribe(
        data => {
          alert("Su nueva Educacion fue añadida correctamente");
          this.cargarEducacion();
          this.form.reset();
        }
      )
    } else {
      this.sEducacion.agregarEstudio(edu).subscribe(
        data => {
          alert("Experiencia editada!!! BRAVOOOOO!!!!");
          this.cargarEducacion();
          this.form.reset();
        }
      )
    }
  }*/
  onUpdate():void{
    let exp = this.form.value;
      this.sEducacion.update(exp.id, exp).subscribe(
        data => {
          alert('Educacion editada correctamente');
          window.location.reload();
          this.form.reset();
        },
        error => {
          alert('Falló al editar la Educacion, intente nuevamente');
          window.location.reload();
          this.form.reset();
        })
    }
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
