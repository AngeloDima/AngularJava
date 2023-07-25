import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/felpe"


  getData() {
    return this.http.get<any[]>(this.url)
  }

}



