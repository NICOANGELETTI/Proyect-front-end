import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { Login } from 'src/app/model/login';
import { AuthserviceService } from '../../AuthService/authservice.service';
import { LoginUsuario } from '../../model/login-usuario';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,

    private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      nombreUsuario1: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
      
    }
   
  }
  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([ '/dashboard'])
       
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
       
        
      })
      
  }
  

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
