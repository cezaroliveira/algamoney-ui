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
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDE0Mjk4ODEsInVzZXJfbmFtZSI6ImFkbWluQGFsZ2Ftb25leS5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSIsIlJPTEVfUkVNT1ZFUl9DQVRFR09SSUEiXSwianRpIjoiNzE2MGNlOGItMzQ5Yi00NjI1LWFmMzktOGM2MzNlYjRkN2UwIiwiY2xpZW50X2lkIjoiYW5ndWxhciIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.Yw_S6pef0buY0t4gsCn7hDw72XoDbFEQrPtBH5gQinU'
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
