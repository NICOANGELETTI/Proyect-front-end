import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  url = 'https://proyect-back-end.onrender.com/experiencia/';
  constructor(
    //Inyectamos servicios que utilizaremos
    private httpClient: HttpClient) {}



  //Todos los metodos del controller de experiencia en Netbeans
  //List,Create,detail,delete,update

  //Metodo para traer la lista de experiencias
  public list(): Observable<Experiencia[]> {
    
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  //Metodo para crear una nueva experiencia
  public create(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(
      this.url + 'nueva/experiencia',
      experiencia
    );
  }
  //Metodo actualizar
  public update(id:number , experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
 
}
  //Metodo para borrar una experiencia
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/experiencia/${id}`);
  }
  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
  }
}
