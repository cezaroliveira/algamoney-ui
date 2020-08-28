import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css'],
})
export class LancamentoPesquisaComponent {
  lancamentos = [
    new Lancamento(
      'Restaurante',
      new Date('07/08/2020'),
      new Date('07/08/2020'),
      15.98,
      'DESPESA'
    ),
    new Lancamento(
      'Salário',
      new Date('07/08/2020'),
      new Date('07/08/2020'),
      120,
      'RECEITA'
    ),
    new Lancamento(
      'Abastecimento',
      new Date('07/08/2020'),
      new Date('07/08/2020'),
      120,
      'DESPESA'
    ),
  ];
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
