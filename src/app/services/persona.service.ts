import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/persona/'
  constructor(private httpClient:HttpClient) { }


  public list():Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + 'ver/personas')
    }  
    public create(Persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'nuevo/persona' , Persona);
    }
    //  public search(id: number):Observable<Persona>{
   // return this.httpClient.get<Persona>(this.url + 'buscar/persona/{id}');
    //}
    public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + 'delete/persona/${id}');
    }


}
