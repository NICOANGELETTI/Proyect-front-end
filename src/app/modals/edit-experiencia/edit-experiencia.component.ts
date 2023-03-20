import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  formExp: FormGroup;
  url: string = 'http://localhost:8080/experiencia';
  //Instanciar
  puesto: '';
  inicio: '';
  fin: '';
  empresa: '';
  url_imagen: '';
  constructor( 
    //Inyectamos en Constructor los Servicios que usaremos
    private sExperiencia: ExperienciaService,
    private formBuilder: FormBuilder,
    private router : Router) { this.formExp = this.formBuilder.group({
       //Realizamos Formulario Reactivo con sus campos requeridos
      puesto: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      url_imagen: ['', [Validators.required]],
    });}

  ngOnInit(): void {
  }
  get puestoExp() {
    return this.formExp.get('puesto');
  }

  get inicioExp() {
    return this.formExp.get('inicio');
  }

  get finExp() {
    return this.formExp.get('fin');
  }

  get empresaExp() {
    return this.formExp.get('empresa');
  }
  get urlExp() {
    return this.formExp.get('url_imagen');
  }


  onUpdate():void{
    let exp = this.formExp.value;
      this.sExperiencia.update(exp.id, exp).subscribe(
        data => {
          alert('Experiencia editada correctamente');
          window.location.reload();
          this.formExp.reset();
        },
        error => {
          alert('Falló al editar la Experiencia, intente nuevamente');
          window.location.reload();
          this.formExp.reset();
        })
    }
      onEnviar(event:Event){
      event.preventDefault;
      if (this.formExp.valid){
        this.onUpdate();
      }else{
        alert("falló en la carga, intente nuevamente");
        this.formExp.markAllAsTouched();
      }
    }
    detail(id:number){
      this.sExperiencia.detail(id).subscribe(data =>{
        this.formExp.setValue(data);
        console.log(data);
      })
    }
}
