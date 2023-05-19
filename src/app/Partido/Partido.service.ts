import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Partido } from './Partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiURL = environment.baseURL

  constructor(private http: HttpClient) { }

getPartidos(): Observable<Partido[]>{
  return this.http.get<Partido[]>(this.apiURL);

}
}
