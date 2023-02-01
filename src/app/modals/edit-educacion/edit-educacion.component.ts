import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from '../../services/educacion.service';
import { Router } from '@angular/router';
import { Habilidades } from '../../model/habilidades';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent implements OnInit {
  estudios: Educacion[] = [];
  edu = new Educacion(1, '', '', '', '', '');

  form: FormGroup;
  //Instanciar
  id: '';
  titulo: '';
  inicio: '';
  fin: '';
  institucion: '';
  url_imagen: '';
  constructor(
    private sEducacion: EducacionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      titulo: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      institucion: [''],
      url_imagen: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
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

  cargarEducacion(): void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/

    this.sEducacion.agregarEstudio(this.form.value).subscribe(
      (data) => {
        alert('Nuevo Curso agregado');
        window.location.reload();
      },
      (error) => {
        alert('Se ha producido un error, intente nuevamente');
      }
    );
  }

  onUpdate(): void {
    let edu = this.form.value;
    this.sEducacion.update(edu.id, edu).subscribe(
      (error) => {
        this.cargarEducacion();
        this.form.reset();
      },
      (data) => {
        alert('Educacion editada correctamente');
        console.log(data);
        this.cargarEducacion();
        this.form.reset();
      }
    );
  }
  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.onUpdate();
    } else {
      alert('Fallo en la carga,intente nuevamente');
      this.form.markAllAsTouched();
    }
  }
}
