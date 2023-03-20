import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from '../model/perfil';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  url = 'https://proyect-back-end.onrender.com/persona/';
  constructor(
    //Inyectamos servicios que utilizaremos
    private httpClient: HttpClient
  ) {}

  //Metodo para traer la lista de Perfiles
  public list(): Observable<Perfil[]> {
    return this.httpClient.get<Perfil[]>(this.url + 'lista');
  }
  //Metodo para crear un nuevo Perfiñ
  public create(perfil: Perfil): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nueva/personas', perfil);
  }

  //  public search(id: number):Observable<Persona>{
  // return this.httpClient.get<Persona>(this.url + 'buscar/persona/{id}');
  //}

  //Metodo para borrar un Perfil
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/persona/${id}`);
  }
  //Metodo actualizar
  public update(id: number, perfil: Perfil): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, perfil);
  }
  public detail(id: number): Observable<Perfil> {
    return this.httpClient.get<Perfil>(this.url + `detail/${id}`);
  }
}
