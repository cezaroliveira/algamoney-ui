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
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDE0Mjk4ODEsInVzZXJfbmFtZSI6ImFkbWluQGFsZ2Ftb25leS5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSIsIlJPTEVfUkVNT1ZFUl9DQVRFR09SSUEiXSwianRpIjoiNzE2MGNlOGItMzQ5Yi00NjI1LWFmMzktOGM2MzNlYjRkN2UwIiwiY2xpZW50X2lkIjoiYW5ndWxhciIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.Yw_S6pef0buY0t4gsCn7hDw72XoDbFEQrPtBH5gQinU'
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
