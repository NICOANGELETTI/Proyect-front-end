import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(
    //Inyectamos servicios que utilizaremos
    private autenticacionServicio: AutenticacionService,
    private rutas: Router,private auth: TokenService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let currentUser = this.autenticacionServicio.usuarioAutenticado;
    if (!this.auth.getToken()) {
      return this.rutas.navigate(['/']).then(() => false);
      
    }
    
  return true;
  
}
  }

