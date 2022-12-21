import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url = 'http://localhost:8080/proyectos/'
  constructor(private httpClient:HttpClient) { }



  public list():Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.url + 'ver/proyectos')
    }  
    public create(Proyectos: Proyectos):Observable<any>{
    return this.httpClient.post<any>(this.url + 'nuevo/proyecto' , Proyectos);
    }
   /* public search(id: number):Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.url + '/buscar/proyecto/{id}');
    }*/
    public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + 'delete/proyectos/${id}');
    }
}
