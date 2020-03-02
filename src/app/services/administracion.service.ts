import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Corte } from '../models/corte';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  apiUrl = 'http://10.10.1.221:9890/distribucionx' ;
 //  apiUrl = 'http://localhost:9890/distribucionx' ;

  constructor(private http: HttpClient) {}

  asignarActividad(empleadoId: string, nip: string, actividad: string) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('nip', nip).set('empleadoId', empleadoId).set('actividad', actividad);
    return this.http.post( `${this.apiUrl}/asignarActividad`, {}, {headers, params});
   }

   terminarActividad( nip: string, actividadId: string) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('nip', nip).set('id', actividadId);
    return this.http.post( `${this.apiUrl}/terminarActividad`, {}, {headers, params});
   }

   cortesParciales() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<Corte[]>( `${this.apiUrl}/cortesParciales`, {headers});
   }

   parcializarCorte(id, cortadores) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('id', id).set('cortadoresId', cortadores);
    return this.http.post( `${this.apiUrl}/parcializarCorte`, {}, {headers, params});
   }

   buscarVentaParcial(folio) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const params = new HttpParams().set('folio', folio);
      return this.http.get<any[]>(`${this.apiUrl}/buscarVentaParcial`, {headers, params});
   }

   iniciarEntregaParcial(parcialId, userId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('ventaId', parcialId).set('userId', userId);
    return this.http.post( `${this.apiUrl}/iniciarParcial`, {}, {headers, params});
   }

   entregasParciales() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<EntregaParcial[]>(`${this.apiUrl}/entregas`, {headers});
   }

   getEntrega(entregaId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('entregaId', entregaId);
    return this.http.get<EntregaParcial>(`${this.apiUrl}/entrega`, {headers, params});
   }


}
