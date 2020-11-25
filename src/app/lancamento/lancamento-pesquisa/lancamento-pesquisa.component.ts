import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { LancamentoService } from './../lancamento.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css'],
})
export class LancamentoPesquisaComponent implements OnInit {
  lancamentos: Lancamento[] = [];
  descricao: string;
  dtInicio = new Date();
  dtFim = new Date();
  // dtInicio: Date = null;
  // dtFim: Date = null;

  constructor(private lancamentoService: LancamentoService) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    console.log(this.descricao, this.dtInicio, this.dtFim);

    this.lancamentoService.pesquisar({
      descricao: this.descricao,
      dataVencimentoInicio: this.dtInicio,
      dataVencimentoFim: this.dtFim
    }).subscribe(retorno => {
      this.lancamentos = retorno.content;
    });
  }

}

export class Lancamento {
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  tipo: string;

  constructor(
    descricao: string,
    dataVencimento: Date,
    dataPagamento: Date,
    valor: number,
    tipo: string
  ) {
    this.descricao = descricao;
    this.dataVencimento = dataVencimento;
    this.dataPagamento = dataPagamento;
    this.valor = valor;
    this.tipo = tipo;
  }
}
