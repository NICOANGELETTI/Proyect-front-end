import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  url = 'https://proyect-back-end.onrender.com/autenticacion/login';
  currentUserSubject: BehaviorSubject<any>;
  sessionStorage: any;

  constructor(
    //Inyectamos servicios que utilizaremos
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  //Metodo Login
  loginPersona(credenciales: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }
  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  logOut(): void {
    window.sessionStorage.clear();
  }
}
