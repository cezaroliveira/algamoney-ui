import { Lancamento } from './lancamento.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  urlService = 'http://localhost:8080/lancamentos';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTk2MDc3MzMsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ST0xFIl0sImp0aSI6IjljOTk3ODc5LTM2MGItNDI4ZC1iM2EyLWQyMmI0MTkyOGIyOCIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.lxsDL5ikqzjyfd2k6NnHhY48LHgKWHdSvCnZOiANJ_Q');
  }

  pesquisar(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTk2MDc3MzMsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ST0xFIl0sImp0aSI6IjljOTk3ODc5LTM2MGItNDI4ZC1iM2EyLWQyMmI0MTkyOGIyOCIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.lxsDL5ikqzjyfd2k6NnHhY48LHgKWHdSvCnZOiANJ_Q'
      })
    };

    return this.http.get<Lancamento>(this.urlService, httpOptions);
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
