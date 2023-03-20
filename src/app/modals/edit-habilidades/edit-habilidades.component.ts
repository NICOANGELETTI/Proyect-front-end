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
  hab:Habilidades;
  habilidades: Habilidades = null;
  Habilidades: Habilidades[] = [];
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

  onUpdate():void{
    let hab = this.formSkills.value;
      this.sHabilidades.update(hab.id, hab).subscribe(
        data => {
          alert('Habilidad editada correctamente');
          window.location.reload();
          this.formSkills.reset();
        },
        error => {
          alert('Falló al editar la habilidad, intente nuevamente');
          window.location.reload();
          this.formSkills.reset();
        })
    }
      onEnviar(event:Event){
      event.preventDefault;
      if (this.formSkills.valid){
        this.onUpdate();
      }else{
        alert("falló en la carga, intente nuevamente");
        this.formSkills.markAllAsTouched();
      }
    }
    detail(id:number){
      this.sHabilidades.detail(id).subscribe(data =>{
        this.formSkills.setValue(data);
        console.log(data);
      })
    }

}
