import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credito } from '../../model/credito.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaCreditosService {

  	private apiUrl = 'http://localhost:8080/api/creditos';

	constructor(private http: HttpClient) { }

	getCreditos(): Observable<Credito[]> {
      return this.http.get<Credito[]>(`${this.apiUrl}`);
    }

    getCreditosPorNfse(numeroNfse: string): Observable<Credito[]> {
      return this.http.get<Credito[]>(`${this.apiUrl}/${numeroNfse}`);
    }

    getCreditoPorNumCredConstituido(numeroCredito: string): Observable<Credito[]> {
      return this.http.get<Credito[]>(`${this.apiUrl}/credito/${numeroCredito}`);
    }
}
