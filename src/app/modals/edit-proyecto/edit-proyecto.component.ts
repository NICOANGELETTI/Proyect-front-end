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
  //Declaramos
  titulo:'';
  urlImagen:'';
  descripcion:'';
  urlProyect:'';
  
  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private sProyecto: ProyectosService, private formBuilder: FormBuilder) {
    this.formProyect = this.formBuilder.group({
       //Realizamos Formulario Reactivo con sus campos requeridos
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

onUpdate():void{
  let hab = this.formProyect.value;
    this.sProyecto.update(hab.id, hab).subscribe(
      data => {
        alert('Proyecto editado correctamente');
        window.location.reload();
        this.formProyect.reset();
      },
      error => {
        alert('Falló al editar la Proyecto, intente nuevamente');
        window.location.reload();
        this.formProyect.reset();
      })
  }
    onEnviar(event:Event){
    event.preventDefault;
    if (this.formProyect.valid){
      this.onUpdate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.formProyect.markAllAsTouched();
    }
  }
  detail(id:number){
    this.sProyecto.detail(id).subscribe(data =>{
      this.formProyect.setValue(data);
      console.log(data);
    })
  }
}
