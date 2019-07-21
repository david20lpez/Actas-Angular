import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Acta } from '../model/acta';
import { Participante } from '../model/participantes';

@Injectable({
  providedIn: 'root'
})
export class ActaService {

  constructor(private http : HttpClient) { }

  public getActas() : Observable<Array<Acta>> {
    return this.http.get<Array<Acta>>("/api/v.1/actas/");
  }

  public saveActa(acta : Acta) : Observable<Acta> {
    console.log(acta);
    return this.http.post<Acta>("/api/v.1/actas/", acta);
  }

}
