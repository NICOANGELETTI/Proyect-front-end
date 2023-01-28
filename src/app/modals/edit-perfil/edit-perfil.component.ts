import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(  private Persona: PersonaService,
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
