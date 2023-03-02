import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  //Declaramos
  isLogged = false;

  constructor(
    //Inyectamos en Constructor los Servicios que usaremos
    private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    //Traemos el Token y realizamos el condicional de si estamos logueados o no
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  //Metodo de Logout
  
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  //Metodo de Login
  login(){
    this.router.navigate(['/login'])
  }
}
  

