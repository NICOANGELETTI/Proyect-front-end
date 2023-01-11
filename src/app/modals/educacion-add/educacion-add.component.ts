import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from '../../services/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css'],
})
export class EducacionAddComponent implements OnInit {
  
  url: string = 'http://localhost:8080/educacion';
  form: FormGroup;
  //Instanciar
  titulo: '';
  inicio: '';
  fin: '';
  institucion: '';
  url_imagen: '';
 

  constructor(
    private sEducacion: EducacionService,
    private formBuilder: FormBuilder,
    private router : Router
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
 /*
  OnCreate():void{
    const estu= new Educacion(this.titulo,this.inicio ,this.fin,this.url_imagen,this.institucion)
    console.log(estu);
      this.sEducacion.agregarEstudio(this.form.value).subscribe(data=>{
        alert("Estudio Añadido");
        this.router.navigateByUrl("/")
        window.location.reload();
      }, error => {
        alert("Fallo en la carga,intente nuevamente");
        this.form.reset();
      })
  }*/
  

  //Copie desde el repo de Josman
 /*OnCreate() :void {
  const estu= new Educacion(this.titulo,this.inicio ,this.fin,this.url_imagen,this.institucion)
  console.log(estu);
  if (this.form.valid){
    this.sEducacion.agregarEstudio(this.form.value);
      console.log(JSON.stringify(this.form.value)); 
     alert("Educacion añadida con exito")    
      console.log(this.url + '/nuevo/estudio');
    }else{
      alert("Debe ingresar todos los datos");
      
    }       
  }*/
  //FUNCIONA!
  crearNuevaExperiencia():void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/
    
    this.sEducacion.agregarEstudio(this.form.value).subscribe(data => {
      alert("Nuevo Curso agregado");
      window.location.reload();
    }, error => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
  limpiar():void {
    this.form.reset();
  } 


}
/* 
onCreate() :void {
  const estu= new Educacion(this.titulo,this.inicio ,this.fin,this.url_imagen,this.institucion)
  console.log(estu);
  if (this.form.valid){
      console.log(JSON.stringify(this.form.value)); 
      console.log("Agregar/Modificar");    
      console.log(this.url + '/nuevo/estudio');
    }else{
      alert("Debe ingresar todos los datos");
      this.form.markAllAsTouched();
    }       
  }
  */