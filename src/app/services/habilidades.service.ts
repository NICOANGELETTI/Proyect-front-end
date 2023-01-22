import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  url = 'http://localhost:8080/habilidades/'
  constructor(private httpClient:HttpClient) {}
        //Todos los metodos del controller de habilidades en Netbeans

    
   
  public list():Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.url + 'lista')
    }  
    public create(Habilidades: Habilidades):Observable<any>{
    return this.httpClient.post<any>(this.url + 'nueva/habilidad' , Habilidades);
    }
   /* public search(id: number):Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.url + '/buscar/habilidad/{id}');
    }*/
    public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + 'delete/habilidad/${id}');
    }
}
 
