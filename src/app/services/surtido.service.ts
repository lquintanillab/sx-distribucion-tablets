import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Surtido } from '../models/surtido';
import { Corte } from '../models/corte';
import { MesaEmpaque } from '../models/mesaEmpaque';

@Injectable({
  providedIn: 'root'
})
export class SurtidoService {

  apiUrl = 'http://10.10.1.221:9890/distribucionx' ;
 //  apiUrl = 'http://localhost:9890/distribucionx' ;

  constructor(private http: HttpClient) {

   }

 documentos(tipo) {
   if (tipo === 'trs') {
      tipo = 'transformaciones';
   }
   return this.http.get<any[]>(`${this.apiUrl}/${tipo}`);
 }

 buscarDocumento(folio, tipo) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('folio', folio).set('tipo', tipo);

  return this.http.get<any[]>( `${this.apiUrl}/buscar`, {headers, params});
 }

 iniciarSurtido(id: string, nip: string, tipo: string) {

  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('nip', nip).set('id', id).set('tipo', tipo);

  return this.http.post( `${this.apiUrl}/iniciar`, {}, {headers, params});

 }

 asignacionManual(id: string, nip: string, tipo: string, userId) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('nip', nip).set('id', id).set('tipo', tipo).set('surtidorId', userId);

  return this.http.post( `${this.apiUrl}/asignacion`, {}, {headers, params});
 }

 getEmpleados(tipo: string) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.get<any[]>( `${this.apiUrl}/${tipo}`);
 }

 entregaLocal() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<Surtido[]>( `${this.apiUrl}/entregaLocal`);
 }

 entregaEnvio() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.get<Surtido[]>( `${this.apiUrl}/entregaEnvio`);
}

entregaCorte() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.get<Corte[]>( `${this.apiUrl}/entregaCorte`);
}

entregarParaCorte(id: string, nip: string, userId: string, adicionales) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('nip', nip).set('corteId', id).set('cortadorId', userId).set('adicionales', adicionales);

  return this.http.post( `${this.apiUrl}/entregarCorte`, {}, {headers, params});
 }



 buscarSurtido(folio) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('folio', folio);

  return this.http.get<Surtido[]>( `${this.apiUrl}/buscador`, {headers, params});
 }

 atender(surtido: Surtido, nip: string, accion: string) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('nip', nip).set('id', surtido.id).set('accion', accion);
  return this.http.post( `${this.apiUrl}/atender`, {}, {headers, params});
 }

 mesaEmpaque(cortadorId) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('cortadorId', cortadorId);

  return this.http.get<Corte[]>( `${this.apiUrl}/empaque`, {headers, params});
 }


 mesas() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.get<MesaEmpaque[]>( `${this.apiUrl}/mesas`, {headers});
 }

 asignarAMesa(mesaId, nip) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('nip', nip).set('mesaId', mesaId);
  return this.http.post( `${this.apiUrl}/asignarse`, {}, {headers, params});
 }

 salirDeMesa(mesaId, nip) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('nip', nip).set('mesaId', mesaId);
  return this.http.post( `${this.apiUrl}/salir`, {}, {headers, params});
 }

 asignados(mesaId) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('mesaId', mesaId);

  return this.http.get<Corte[]>( `${this.apiUrl}/mesa`, {headers, params});
 }

 terminarEmpaque(mesaId: string, nip: string, corteId: string, adicionales) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('nip', nip).set('mesaId', mesaId).set('corteId', corteId).set('adicionales', adicionales);

  return this.http.post( `${this.apiUrl}/terminarEmpacadoMesa`, {}, {headers, params});
 }

 crearMesa(cortadorId) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('cortadorId', cortadorId);

  return this.http.post( `${this.apiUrl}/registrarMesa`, {}, {headers, params});
 }

 corte(cortadorId) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('cortadorId', cortadorId);

  return this.http.get<Corte[]>( `${this.apiUrl}/corte`, {headers, params});
 }

 atenderCorte(corteId, accion, cortadorId) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const params = new HttpParams().set('cortadorId', cortadorId).set('accion', accion).set('corteId', corteId);

  return this.http.post( `${this.apiUrl}/atenderCorte`, {}, {headers, params});
 }

 proceso() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.get<Surtido[]>( `${this.apiUrl}/proceso`, {headers});
 }
 asignacionesPendientes() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.get<any[]>( `${this.apiUrl}/empleadosActividad`);
 }

 getOperacion(id: string, tipo: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('id', id).set('tipo', tipo);
    return this.http.get( `${this.apiUrl}/detalle`, {headers, params});
 }

}
