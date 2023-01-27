import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-add',
  templateUrl: './agregar-perfil.component.html',
  styleUrls: ['./agregar-perfil.component.css'],
})
export class AgregarPerfilComponent implements OnInit {
  formPerfil: FormGroup;
  nombre: '';
  apellido: '';
  acercade: '';
  tituloDeveloper: '';
  urlimagenPerfil: '';

  constructor(
    private Persona: PersonaService,
    private formBuilder: FormBuilder
  ) {
    this.formPerfil = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      acercade: ['', [Validators.required]],
      tituloDeveloper: ['', [Validators.required]],
      url_imagenPerfil: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  get nombrePerfil() {
    return this.formPerfil.get('nombre');
  }

  get apellidoPerfil() {
    return this.formPerfil.get('apellido');
  }
  get acercadePerfil() {
    return this.formPerfil.get('acercade');
  }

  get tituloDeveloperPerfil() {
    return this.formPerfil.get('tituloDeveloper');
  }

  get url_imagenPerfil() {
    return this.formPerfil.get('urlimagenPerfil');
  }

  //Copie desde el repo de Josman
  crearnuevoPerfil(): void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/

    this.Persona.agregarPersonas(this.formPerfil.value).subscribe(
      (data) => {
        alert('Nuevo perfi agregado');
        window.location.reload();
      },
      (error) => {
        alert('Se ha producido un error, intente nuevamente');
      }
    );
  }
  limpiar(): void {
    this.formPerfil.reset();
  }
}
