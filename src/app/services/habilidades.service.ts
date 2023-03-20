import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root',
})
export class HabilidadesService {
  url = 'https://proyect-back-end.onrender.com/habilidades/';
  constructor(
    //Inyectamos servicios que utilizaremos
    private httpClient: HttpClient
  ) {}

  //Metodo para mostrar la lista de habilidades
  public list(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.url + 'lista');
  }
  //Metodo para agregar una nueva habilidad
  public create(Habilidades: Habilidades): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nueva/habilidad', Habilidades);
  }
  /* public search(id: number):Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.url + '/buscar/habilidad/{id}');
    }*/
  //Metodo para borrar una habilidad
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/habilidad/${id}`);
  }
  //Metodo actualizar
  public update(id: number, habilidades: Habilidades): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, habilidades);
  }
  public detail(id: number): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(this.url + `detail/${id}`);
  }
}
