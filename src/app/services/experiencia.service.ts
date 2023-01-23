import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  url = 'http://localhost:8080/experiencia/';
  constructor(private httpClient: HttpClient) {}

  experienciaModal: Experiencia = {
    puesto: '',
    inicio: '',
    fin: '',
    empresa: '',
    url_imagen: '',
  };

  //Todos los metodos del controller de experiencia en Netbeans
  //List,Create,detail,delete,update

  public list(): Observable<Experiencia[]> {
    //Toma todas las experiencias que haya y le pasamos la url
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }
  public create(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(
      this.url + 'nueva/experiencia',
      experiencia
    );
  }
  public update(experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.url + 'update', experiencia);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'delete/estudio/${id}');
  }
}
