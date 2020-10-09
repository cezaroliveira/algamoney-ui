import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Pessoa, PessoaFilter } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  urlService = 'http://localhost:8080/pessoas';
  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjAyMjc5Nzk2LCJhdXRob3JpdGllcyI6WyJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfVVNVQVJJTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX0FUVUFMSVpBUl9DQVRFR09SSUEiLCJST0xFX0NBREFTVFJBUl9VU1VBUklPIiwiUk9MRV9BVFVBTElaQVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfQVRVQUxJWkFSX1VTVUFSSU8iLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX1JFTU9WRVJfQ0FURUdPUklBIiwiUk9MRV9SRU1PVkVSX1VTVUFSSU8iLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiMTRkZjM2OTQtNTBhMy00YmZlLWE1ZjMtOTUwNjE4YTg1YTAyIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.HbcciEjcipIP94ovgBMYU7kH9JU9CvRQ-gJN7Eboyd4'
  });

  constructor(private http: HttpClient) {}

  pesquisar(filtro?: Partial<PessoaFilter>): Observable<any> {

    let params = new HttpParams();

    if (filtro) {
      if (filtro.nome) {
        params = params.set('$filter', `(nome contains '` + filtro.nome + `')`);
      }
    }

    return this.http.get<Pessoa>(this.urlService, {
      headers: this.headers,
      params
    });
  }

  // obter(pessoa: Partial<Pessoa>): Observable<Pessoa> {
  //   return this.http.get<Pessoa>(`${this.urlService}\\${pessoa.codigo}`);
  // }

  // adicionar(pessoa: Pessoa): Observable<any> {
  //   return this.http.post(this.urlService, pessoa);
  // }

  // alterar(pessoa: Partial<Pessoa>): Observable<any> {
  //   return this.http.put(`${this.urlService}\\${pessoa.codigo}`, pessoa);
  // }

  // excluir(pessoa: Partial<Pessoa>): Observable<any> {
  //   return this.http.delete(`${this.urlService}\\${pessoa.codigo}`);
  // }
}
