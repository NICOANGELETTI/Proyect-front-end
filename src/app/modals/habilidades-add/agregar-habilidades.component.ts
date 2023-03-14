import { Component, OnInit } from '@angular/core';
import { Habilidades } from '../../model/habilidades';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-habilidades-add',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css'],
})
export class AgregarHabilidadesComponent implements OnInit {
  formSkills: FormGroup;
  habilidad: '';
  porcentaje: number;

  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private sHabilidades: HabilidadesService,
    private formBuilder: FormBuilder
  ) {
    //Realizamos Formulario Reactivo con sus campos requeridos
    this.formSkills = this.formBuilder.group({
      habilidad: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  get porcentajeSkill() {
    return this.formSkills.get('porcentaje');
  }

  get nombreSkill() {
    return this.formSkills.get('habilidad');
  }

 
  crearNuevaHabilidad(): void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/

    this.sHabilidades.create(this.formSkills.value).subscribe(
      (data) => {
        alert('Nueva Habilidad agregada');
        window.location.reload();
      },
      (error) => {
        alert('Se ha producido un error, intente nuevamente');
      }
    );
  }
  limpiar(): void {
    this.formSkills.reset();
  }
}
