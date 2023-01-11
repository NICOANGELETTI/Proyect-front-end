import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthserviceService } from '../../AuthService/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  persona: Persona = new Persona('', '', '', '', '', '', '');

  constructor(
    private ruta: Router,
    private formBuilder: FormBuilder,
    private autService: AutenticacionService
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  get Password() {
    return this.formLogin.get('contraseña');
  }

  get Mail() {
    return this.formLogin.get('usuario');
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false;
  }

  onEnviar(event: Event) {
    event.preventDefault;
    this.autService.loginPersona(this.formLogin.value).subscribe((data) => {
      console.log('DATA: ' + JSON.stringify(data));
    });
    
    this.ruta.navigate(['/dashboard']);
    
  }
  
}
/* 
// Detenemos la propagación o ejecución del compotamiento submit de un form
 event.preventDefault; 
 
 if (this.formLogin.valid){
   // Llamamos a nuestro servicio para enviar los datos al servidor
   // También podríamos ejecutar alguna lógica extra
   alert("Todo salio bien ¡Enviar formuario!")
 }else{
   // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
   this.formLogin.markAllAsTouched(); 
 }
}*/
