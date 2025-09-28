//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { Credito } from '../../model/credito.model';
//
//@Injectable({
//  providedIn: 'root'
//})
//export class PesquisaCreditosService {
//
//  private apiUrl = 'http://localhost:8080/api/creditos';
//
//  constructor(private http: HttpClient) { }
//
//  obterCreditosPorNfse(numeroNfse: string): Observable<Credito[]> {
//    const url = `${this.apiUrl}/${numeroNfse}`;
//    return this.http.get<Credito[]>(url);
//  }
//  
//  obterCreditosPorNumeroCredito(numeroCredito: string): Observable<Credito[]> {
//    const url = `${this.apiUrl}/credito/${numeroCredito}`;
//    return this.http.get<Credito[]>(url);
//  }
//}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Certificando-se que o HttpClient é importado
import { Observable } from 'rxjs';
import { Credito } from '../../model/credito.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaCreditosService {

  private apiUrl = 'http://localhost:8080/api/creditos';

  constructor(private http: HttpClient) { }

  obterCreditosPorNfse(numeroNfse: string): Observable<Credito[]> {
    const url = `${this.apiUrl}/${numeroNfse}`;
    return this.http.get<Credito[]>(url);
  }

  obterCreditosPorNumeroCredito(numeroCredito: string): Observable<Credito[]> {
    const url = `${this.apiUrl}/credito/${numeroCredito}`;
    return this.http.get<Credito[]>(url);
  }
}
