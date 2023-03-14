import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  url = 'http://localhost:8080/educacion/';
  constructor(
    //Inyectamos servicios que utilizaremos
    private httpClient: HttpClient) {}

  //Esto lo agregue del portfolio de Paz
  /*
  educacionModal : Educacion = {
  
    titulo: '',
    inicio: '',
    fin: '',
    institucion: '',
    url_imagen:'',
  }*/
  
  //Metodo para traer la lista 
  public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }
  
  //Metodo para agregar
  public agregarEstudio(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nuevo/estudio', educacion);
  }
  //Metodo Buscar
  public search(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.url + `buscar/estudio/{id}`);
  }
  //Metodo borrar
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/estudio/${id}`);
  }
  //Metodo actualizar
   public update(id:number , educacion:Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
   
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
  }
  //Metodo traer por ID
  public getById(id: number):Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url+ `/${id}`);
  }
  //Metodo Editar
  public edit(Estudio: Educacion):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/$`, Estudio);
    }
   
}
