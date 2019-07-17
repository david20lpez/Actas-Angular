import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  public saveProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>('/api/v.1/proyectos/', proyecto);
  }

  public listarProyectos(): Observable<Array<Proyecto>>{
    return this.http.get<Array<Proyecto>>('/api/v.1/proyectos/');
  }
}
