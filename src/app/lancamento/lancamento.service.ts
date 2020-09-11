import { Lancamento } from './lancamento.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  urlService = 'http://localhost:8080/lancamentos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTk4NTQ2NDQsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ST0xFIl0sImp0aSI6IjQ1ZDZlZWIyLTNmMzAtNDc1Ni04YjcxLTA2OTNhYTQ4MGE2MyIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.KbAweLFwhomgKWokNMoo8SATLkS7h1Hu2wHV7xPj2cw'
    })
  };

  constructor(private http: HttpClient) {}

  pesquisar(): Observable<any> {
    return this.http.get<Lancamento>(this.urlService, this.httpOptions);
  }

  // obter(lancamento: Partial<Lancamento>): Observable<Lancamento> {
  //   return this.http.get<Lancamento>(`${this.urlService}\\${lancamento.codigo}`);
  // }

  // adicionar(lancamento: Lancamento): Observable<any> {
  //   return this.http.post(this.urlService, lancamento);
  // }

  // alterar(lancamento: Partial<Lancamento>): Observable<any> {
  //   return this.http.put(`${this.urlService}\\${lancamento.codigo}`, lancamento);
  // }

  // excluir(lancamento: Partial<Lancamento>): Observable<any> {
  //   return this.http.delete(`${this.urlService}\\${lancamento.codigo}`);
  // }
}
