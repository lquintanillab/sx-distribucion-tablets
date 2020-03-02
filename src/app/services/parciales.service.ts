import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Surtido } from '../models/surtido';

@Injectable({
  providedIn: 'root'
})
export class ParcialesService {

  apiUrl = 'http://10.10.1.221:9890/distribucionx' ;
  //  apiUrl = 'http://localhost:9890/distribucionx' ;

  constructor(private http: HttpClient) { }

  asignarParcial(entrega, userId, empId) {
    console.log('----------', entrega);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('empId', empId).set('userId', userId);
    return this.http.post( `${this.apiUrl}/crearSurtido`, entrega, {headers, params});
   }


   surtidoReport() {
      console.log('Imprimiendo Reporte');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.get( `${this.apiUrl}/reporte`, {headers});
   }

   detalleEntrega(id) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const params = new HttpParams().set('id', id);
      return this.http.get<Surtido[]>( `${this.apiUrl}/detalleParciales`, {headers, params});
   }

}
