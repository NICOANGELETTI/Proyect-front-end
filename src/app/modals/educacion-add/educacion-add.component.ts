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


  constructor(
    private  sEducacion:EducacionService ,private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        titulo: ['', [Validators.required] ],
        inicio: ['', [Validators.required]],
        fin: ['', [Validators.required]],
        institucion: ['', ],
        url_imagen: ['', [Validators.required]],
      })
    }
 
  ngOnInit(): void {
    
  }
  get tituloCurso() {
    return this.form.get("titulo");
  }

  get inicioCurso() {
    return this.form.get("inicio");
  }

  get finCurso() {
    return this.form.get("fin");
  }

  get institucionCurso() {
    return this.form.get("institucion");
  }
  get urlCurso() {
    return this.form.get("url_imagen");
  }

  crearNuevoCurso():void {
    this.sEducacion.create(this.form.value).subscribe(data => {
      alert("Nuevo Curso agregado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
}