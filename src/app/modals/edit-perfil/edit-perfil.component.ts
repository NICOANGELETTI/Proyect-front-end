import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  formPerfil: FormGroup;
  nombre: '';
  apellido: '';
  acercade: '';
  tituloDeveloper: '';
  urlimagenPerfil: '';

  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private sPerfil: PerfilService,
    private formBuilder: FormBuilder
  ) {
    this.formPerfil = this.formBuilder.group({
       //Realizamos Formulario Reactivo con sus campos requeridos
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      acercade: ['', [Validators.required]],
      tituloDeveloper: ['', [Validators.required]],
      url_imagenPerfil: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
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

}
