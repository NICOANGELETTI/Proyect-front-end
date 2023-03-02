import { Component, OnInit } from '@angular/core';
import { Habilidades } from '../../model/habilidades';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  formSkills: FormGroup;
  habilidad: '';
  porcentaje: number;
  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private sHabilidades: HabilidadesService,
    private formBuilder: FormBuilder
  ) {
    
    this.formSkills = this.formBuilder.group({
       //Realizamos Formulario Reactivo con sus campos requeridos
      habilidad: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }
  get porcentajeSkill() {
    return this.formSkills.get('porcentaje');
  }

  get nombreSkill() {
    return this.formSkills.get('habilidad');
  }
}
