import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  url = 'http://localhost:8080/educacion/';
  constructor(private httpClient: HttpClient) {}

  //Esto lo agregue del portfolio de Paz
  /*
  educacionModal : Educacion = {
  
    titulo: '',
    inicio: '',
    fin: '',
    institucion: '',
    url_imagen:'',
  }*/

  public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }
  public agregarEstudio(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nuevo/estudio', educacion);
  }
  public search(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.url + `buscar/estudio/{id}`);
  }
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/estudio/${id}`);
  }

   public update(id:number , educacion:Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
   
  }
  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
  }
  
}
