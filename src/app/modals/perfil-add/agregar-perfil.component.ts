import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Perfil } from '../../model/perfil';
import { PerfilService } from '../../services/perfil.service';

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
    return this.formPerfil.get('url_imagenPerfil');
  }


  crearnuevoPerfil(): void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/

    this.sPerfil.create(this.formPerfil.value).subscribe(
      (data) => {
        alert('Nuevo perfil agregado');
        window.location.reload();
      },
      (error) => {
        alert('Se ha producido un error, intente nuevamente');
      }
    );
  }
  //Con este metodo limpiamos el formulario
  limpiar(): void {
    this.formPerfil.reset();
  }
}
