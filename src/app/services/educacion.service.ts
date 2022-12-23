import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = 'http://localhost:8080/educacion/'
  constructor(private httpClient:HttpClient) { }

//Esto lo agregue del portfolio de Paz
  educacionModal : Educacion = {
  
    titulo: '',
    inicio: '',
    fin: '',
    institucion: '',
    url_imagen:'',
  }

  //Todos los metodos del controller de educacion en Netbeans



  public list():Observable<Educacion[]> {
return this.httpClient.get<Educacion[]>(this.url + 'ver/estudios')
}  
public create(educacion: Educacion):Observable<any>{
return this.httpClient.post<any>(this.url + 'nuevo/estudio' , Educacion);
}
public search(id: number):Observable<Educacion>{
return this.httpClient.get<Educacion>(this.url + 'buscar/estudio/{id}');
}
public delete(id: number):Observable<any>{
return this.httpClient.delete<any>(this.url + 'delete/estudio/${id}');
}

}
