import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';


@Component({
  selector: 'app-experiencia-add',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  formExp: FormGroup;

 //Instanciar
    puesto: '';
    inicio: '';
    fin: '';
    empresa: '';
    url_imagen: '';

  constructor(private sExperiencia: ExperienciaService, private formBuilder: FormBuilder) {
    this.formExp = this.formBuilder.group({
      puesto: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      url_imagen: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get puestoExp(){
    return this.formExp.get("puesto");
  }

  get inicioExp() {
    return this.formExp.get("inicio");
  }

  get finExp() {
    return this.formExp.get("fin");
  }

  get empresaExp() {
    return this.formExp.get("empresa");
  }
  get urlExp() {
    return this.formExp.get("url_imagen");
  }

  crearExp():void{
    //const nuevaExperiencia = new Experiencias(this.imgExperiencia, this.puesto, this.anio, this.descripcionTrabajo);
    this.sExperiencia.create(this.formExp.value).subscribe(data => {
      alert("Experiencia agregada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
  limpiar():void {
    this.formExp.reset();
  } 
}
