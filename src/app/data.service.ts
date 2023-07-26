import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/felpe";
  urlTitolo = "http://localhost:8080/felpe/find/";
  urlPrezzo = "http://localhost:8080/felpe/prezzo/";

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getDataTitolo(titolo: string): Observable<any[]> {
    return this.http.get<any[]>(this.urlTitolo + titolo);
  }

  getDataPrezzo(prezzo: number): Observable<any[]> {
    return this.http.get<any[]>(this.urlPrezzo + prezzo);
  }
}
