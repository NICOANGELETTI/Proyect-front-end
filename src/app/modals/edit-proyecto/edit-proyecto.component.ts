import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  formProyect: FormGroup;
  titulo:'';
  urlImagen:'';
  descripcion:'';
  urlProyect:'';
  
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
}
