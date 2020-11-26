import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import * as moment from 'moment';

import { Lancamento, LancamentoFilter } from './lancamento.model';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  // urlService = 'http://localhost:8080/lancamentos';
  urlService = 'http://localhost:8080/lancamentos/filtrarEspecifico';
  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA3MzQxODMwLCJhdXRob3JpdGllcyI6WyJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfVVNVQVJJTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX0FUVUFMSVpBUl9DQVRFR09SSUEiLCJST0xFX0NBREFTVFJBUl9VU1VBUklPIiwiUk9MRV9BVFVBTElaQVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfQVRVQUxJWkFSX1VTVUFSSU8iLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX1JFTU9WRVJfQ0FURUdPUklBIiwiUk9MRV9SRU1PVkVSX1VTVUFSSU8iLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiNmUwMGUwYWUtM2JmNi00MzRlLTg2ZTItOWM3OTBlZjZmMzMzIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.BJNXHrL1TuvQVbFZenAkS6FBPaWrn3QAf8QwtjwHQwE'
  });

  constructor(private http: HttpClient) {}

  pesquisar(filtro?: Partial<LancamentoFilter>): Observable<any> {

    const isFiltrarEspecifico = this.urlService.indexOf('filtrarEspecifico') !== -1;

    console.log(filtro, `filtrarEspecifico = ${isFiltrarEspecifico}`);

    let params = null;

    if (filtro) {

      // Trata o uso do filtro específico LancamentoFilter no backend.
      if (isFiltrarEspecifico) {
        params = this.getParamsFiltrarEspecifico(filtro);
      }

      // Trata o uso do filtro genérico com Predicate.
      else {
        params = this.getParamsFiltrarGenerico(filtro);
      }
    }

    console.log(params);

    return this.http.get<Lancamento>(this.urlService, {
      headers: this.headers,
      params
    });
  }

  /**
   * Trata o uso do filtro específico LancamentoFilter no backend.
   *
   * Exemplo: ?descricao=dios&dataVencimentoInicio=01-04-2020&dataVencimentoFim=01-04-2020
   */
  private getParamsFiltrarEspecifico(filtro: Partial<LancamentoFilter>): HttpParams {

    let params = new HttpParams();

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      filtro.dataVencimentoInicio.setHours(0, 0, 0, 0);
      params = params.append('dataVencimentoInicio', moment(filtro.dataVencimentoInicio).format('DD-MM-YYYY'));
    }

    if (filtro.dataVencimentoFim) {
      filtro.dataVencimentoFim.setHours(0, 0, 0, 0);
      params = params.append('dataVencimentoFim', moment(filtro.dataVencimentoFim).format('DD-MM-YYYY'));
    }

    return params;
  }

  /**
   * Trata o uso do filtro genérico com Predicate.
   * @param filtro contém os filtros a serem utilizados
   */
  private getParamsFiltrarGenerico(filtro: Partial<LancamentoFilter>): HttpParams {

    let params = new HttpParams();

    if (filtro.descricao) {
      params = params.append('$filter', `(descricao contains '` + filtro.descricao + `')`);
    }

    if (filtro.dataVencimentoInicio) {
      filtro.dataVencimentoInicio.setHours(0, 0, 0, 0);

      console.log(filtro.dataVencimentoInicio.toISOString(), filtro.dataVencimentoInicio.toUTCString());

      params = params.append('$filter', `(dataVencimento ge '`
        // + moment(filtro.dataVencimentoInicio).format('YYYY-MM-DDTHH:mm:ss') + `')`);
        + moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD') + `')`);
        // + filtro.dataVencimentoInicio + `')`);
        // + filtro.dataVencimentoInicio.toUTCString() + `')`);
    }

    if (filtro.dataVencimentoFim) {
      filtro.dataVencimentoFim.setHours(0, 0, 0, 0);

      params = params.append('$filter', `(dataVencimento le '`
        // + moment(filtro.dataVencimentoFim).format('YYYY-MM-DDTHH:mm:ss') + `')`);
        // + filtro.dataVencimentoFim + `')`);
        + filtro.dataVencimentoFim.toUTCString() + `')`);
    }

    return params;
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
