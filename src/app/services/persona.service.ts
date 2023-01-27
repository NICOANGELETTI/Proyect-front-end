import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  url = 'http://localhost:8080/persona';
  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }
  public agregarPersonas(Persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nueva/personas', Persona);
  }
  //  public search(id: number):Observable<Persona>{
  // return this.httpClient.get<Persona>(this.url + 'buscar/persona/{id}');
  //}
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/persona/${id}`);
  }
}
