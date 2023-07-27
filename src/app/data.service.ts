import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  urlCrea = "http://localhost:8080/felpe/create"



  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getDataTitolo(titolo: string): Observable<any[]> {
    return this.http.get<any[]>(this.urlTitolo + titolo);
  }

  getDataPrezzo(prezzo: number): Observable<any[]> {
    return this.http.get<any[]>(this.urlPrezzo + prezzo);
  }



  //RICHISTA POST
  postData(titolo: string, prezzo: number): Observable<any> {
    const body = { titolo: titolo, prezzo: prezzo };
    return this.http.post<any>(this.urlCrea, body);
  }


  urlPut = "http://localhost:8080/felpe/update/"

  putData(id: number, data: any): Observable<any> {
    const url = `${this.urlPut}${id}`;
    // Specifica l'intestazione Content-Type come application/json
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(url, data, { headers: headers });
  }


  // DELETE

  deleteData(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete<any>(url);
  }
}



