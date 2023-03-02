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
  titulo:'';
  urlImagen:'';
  descripcion:'';
  urlProyect:'';
  

  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private sProyecto: ProyectosService, 
    private formBuilder: FormBuilder) {

    //Realizamos Formulario Reactivo con sus campos requeridos
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
  //Copie desde el repo de Josman
  crearNuevoProyecto():void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/
    
    this.sProyecto.create(this.formProyect.value).subscribe(data => {
      alert("Nuevo Proyecto agregado");
      window.location.reload();
    }, error => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
  limpiar():void {
    this.formProyect.reset();
  } 


}
 