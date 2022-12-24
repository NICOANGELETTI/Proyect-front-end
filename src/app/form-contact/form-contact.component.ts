import { Component, OnInit } from '@angular/core';
import { formContact } from '../model/formContact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

    form: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required] ],
      correo: ['', [Validators.required , Validators.email]],
      telefono: ['', [Validators.required]],
      asunto: ['', ],
      mensaje: ['', [Validators.required]],
    })
   }


  ngOnInit(): void {
  }

  get nombreForm() {
    return this.form.get("nombre");
  }

  get correoForm() {
    return this.form.get("correo");
  }

  get telefonoForm() {
    return this.form.get("telefono");
  }

  get asuntoForm() {
    return this.form.get("asunto");
  }
  get mensajeForm() {
    return this.form.get("mensaje");
  }


  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

}
