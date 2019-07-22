import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from '../model/participantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  constructor(private http: HttpClient) { }

  public saveParticipante(participante: Participante): Observable<Participante> {
    return this.http.post<Participante>('/api/v.1/participantes/', participante);
  }

  public getParticipantes(): Observable<Array<Participante>> {
    return this.http.get<Array<Participante>>('/api/v.1/participantes/');
  }

  public getParticipante(id : number): Observable<Participante>{
    return this.http.get<Participante>('/api/v.1/participantes/' + id);
  }
}
