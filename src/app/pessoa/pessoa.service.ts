import { Pessoa } from './pessoa.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  urlService = 'http://localhost:8080/pessoas';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTk4NTQ2NDQsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ST0xFIl0sImp0aSI6IjQ1ZDZlZWIyLTNmMzAtNDc1Ni04YjcxLTA2OTNhYTQ4MGE2MyIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.KbAweLFwhomgKWokNMoo8SATLkS7h1Hu2wHV7xPj2cw'
    })
  };

  constructor(private http: HttpClient) {}

  pesquisar(): Observable<any> {
    return this.http.get<Pessoa>(this.urlService, this.httpOptions);
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
