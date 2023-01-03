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
  nombre: '';
  porcentaje: '' ;

  constructor(
    private sHabilidades: HabilidadesService,
    private formBuilder: FormBuilder
  ) {
    this.formSkills = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  get porcentajeSkill() {
    return this.formSkills.get("porcentaje");
  }

  get nombreSkill() {
    return this.formSkills.get("nombre");
  }

  crearHabilidades(): void {
    this.sHabilidades.create(this.formSkills.value).subscribe(
      (data) => {
        alert('Nueva habilidad dura agregada');
        window.location.reload();
      },
      (err) => {
        alert('Se ha producido un error, intente nuevamente');
      }
    );
  }
}
