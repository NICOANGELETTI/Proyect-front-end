import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  url = 'https://proyect-back-end.onrender.com/proyecto/';
  constructor(
    //Inyectamos servicios que utilizaremos
    private httpClient: HttpClient
  ) {}

  //Metodo para traer la lista de proyectos
  public list(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.url + 'lista');
  }
  //Metodo para crear un nuevo proyecto
  public create(Proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nuevo/proyecto', Proyectos);
  }
  /* public search(id: number):Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.url + '/buscar/proyecto/{id}');
    }*/
  //Metodo para borrar un proyecto
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/proyecto/${id}`);
  }
  //Metodo actualizar
  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, proyectos);
  }
  public detail(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.url + `detail/${id}`);
  }
}
