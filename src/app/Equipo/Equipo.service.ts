import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmentE } from 'src/environments/environmentE';
import { Observable } from 'rxjs';
import { Equipo } from './Equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiURL = environmentE.baseURL

constructor(private http: HttpClient) { }
getEquipos(): Observable<Equipo[]>{
  return this.http.get<Equipo[]>(this.apiURL);

}
}
