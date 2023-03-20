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

  onUpdate():void{
    let hab = this.formPerfil.value;
      this.sPerfil.update(hab.id, hab).subscribe(
        data => {
          alert('Perfil editada correctamente');
          window.location.reload();
          this.formPerfil.reset();
        },
        error => {
          alert('Falló al editar la Perfil, intente nuevamente');
          window.location.reload();
          this.formPerfil.reset();
        })
    }
      onEnviar(event:Event){
      event.preventDefault;
      if (this.formPerfil.valid){
        this.onUpdate();
      }else{
        alert("falló en la carga, intente nuevamente");
        this.formPerfil.markAllAsTouched();
      }
    }
    detail(id:number){
      this.sPerfil.detail(id).subscribe(data =>{
        this.formPerfil.setValue(data);
        console.log(data);
      })
    }

}
