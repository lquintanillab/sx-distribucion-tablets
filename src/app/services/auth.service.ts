import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://10.10.1.221:9890/distribucionx' ;

  constructor(private http: HttpClient) { }

  login(nip: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('nip', nip);
    return this.http.get( `${this.apiUrl}/login`, {headers, params});
  }


}
