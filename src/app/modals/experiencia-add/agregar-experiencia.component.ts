import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css'],
})
export class AgregarExperienciaComponent implements OnInit {
  formExp: FormGroup;
  url: string = 'http://localhost:8080/experiencia';
  //Instanciar
  puesto: '';
  inicio: '';
  fin: '';
  empresa: '';
  url_imagen: '';

  constructor(
    private sExperiencia: ExperienciaService,
    private formBuilder: FormBuilder,
    private router : Router
  ) {
    this.formExp = this.formBuilder.group({
      puesto: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      url_imagen: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get puestoExp() {
    return this.formExp.get('puesto');
  }

  get inicioExp() {
    return this.formExp.get('inicio');
  }

  get finExp() {
    return this.formExp.get('fin');
  }

  get empresaExp() {
    return this.formExp.get('empresa');
  }
  get urlExp() {
    return this.formExp.get('url_imagen');
  }

  //Copie desde el repo de Josman
  crearNuevoCurso():void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/
    
    this.sExperiencia.create(this.formExp.value).subscribe(data => {
      alert("Nueva Experiencia agregada");
      window.location.reload();
    }, error => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
  limpiar():void {
    this.formExp.reset();
  } 


}
 
