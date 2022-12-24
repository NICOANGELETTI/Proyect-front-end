import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      formLogin: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.formLogin = this.formBuilder.group({

      usuario:['',[Validators.required , Validators.email]],
      contraseña:['',[Validators.required , Validators.minLength(8)]],

    })
  
  }

  ngOnInit(): void {
  }


  get Password(){
    return this.formLogin.get("contraseña");
  }
 
  get Mail(){
   return this.formLogin.get("usuario");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }

  onEnviar(event: Event){
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
  }


}
