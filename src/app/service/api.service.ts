import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private urlApi = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.urlApi); 
  }
  getCharacter(characterUrl: string): Observable<any> {
    return this.http.get(characterUrl);
  }
}
