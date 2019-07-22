import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compromiso } from '../model/compromiso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompromisoService {

  constructor(private http : HttpClient) { }

  public getCompromisos(): Observable<Array<Compromiso>>{
    return this.http.get<Array<Compromiso>>('/api/v.1/compromisos/');
  }
}
