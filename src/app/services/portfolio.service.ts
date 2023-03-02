import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* Esto es para suscribirse y que se reciba respuesta de forma asincornica */
import { Observable } from 'rxjs';
/* Esto es para poder hacer una peticion */


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    //Inyectamos servicios que utilizaremos
    private http:HttpClient) { }
/* Metodo observable que devuelve datos*/
 getDatos():Observable<any> {
/*   Se llama al JSON con su path -ruta- o bien en su lugar se puede poner una URL para traer datos de un JSON online */
  return this.http.get ('./assets/json/portfolio.json');
} 

}
