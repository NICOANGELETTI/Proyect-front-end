import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyecto-add',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  formProyect: FormGroup;
  constructor(private sProyecto: ProyectosService, private formBuilder: FormBuilder) {
    this.formProyect = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      urlImagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      urlProyect: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get tituloProyect(){
    return this.formProyect.get("titulo");
  }

  get urlImagenProyect() {
    return this.formProyect.get("urlImagen");
  }

  get descripcionProyect() {
    return this.formProyect.get("descripcion");
  }

  get urlProyecto() {
    return this.formProyect.get("urlProyect");
  }
  crearProyect(): void {
    this.sProyecto.create(this.formProyect.value).subscribe(data => {
      alert("Nuevo proyecto agregado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
}
