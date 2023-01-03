import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from '../../services/educacion.service';

@Component({
  selector: 'app-educacion-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css'],
})
export class EducacionAddComponent implements OnInit {
  form: FormGroup;
  //Instanciar
  titulo: '';
  inicio: '';
  fin: '';
  institucion: '';
  url_imagen: '';
 

  constructor(
    private sEducacion: EducacionService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      institucion: [''],
      url_imagen: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  //Validaciones
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

  //Validaciones

//  get tituloValid(){
  //return this.tituloCurso.touched && !this.tituloCurso.valid;
  //}

  
  


/*
  crearNuevoCurso(): void {
    this.sEducacion.create(this.form.value).subscribe(
      (data) => {
        alert('Nuevo Curso agregado');
        window.location.reload();
      },
      (err) => {
        alert('Se ha producido un error, intente nuevamente');
      }
    );
  }
  */
  OnCreate():void{
    const estu= new Educacion(this.titulo,this.inicio ,this.fin,this.url_imagen,this.institucion)
      this.sEducacion.create(estu).subscribe(data=>{
        alert("Estudio Añadido");
        window.location.reload();
      }, err => {
        alert("Fallo en la carga,intente nuevamente");
        this.form.reset();
      })
  }
  limpiar():void {
    this.form.reset();
  } 


}