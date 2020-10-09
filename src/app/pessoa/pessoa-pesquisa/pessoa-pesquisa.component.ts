import { Component, OnInit, Input } from '@angular/core';

import { PessoaService } from './../pessoa.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css'],
})
export class PessoaPesquisaComponent implements OnInit {
  @Input() nome: string;
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    console.log('iniciando o componente', this.nome);
    this.pesquisar();
  }

  pesquisar(): void {
    this.pessoaService.pesquisar({
      nome: this.nome
    }).subscribe(retorno => {
      console.log('retornando os dados da api');

      this.pessoas = retorno.content;

      console.log(retorno.content, this.pessoas);
    });
  }

}

export class Pessoa {
  nome: string;
  cidade: string;
  estado: string;
  ativo: boolean;
  constructor(nome: string, cidade: string, estado: string, ativo: boolean) {
    this.nome = nome;
    this.cidade = cidade;
    this.estado = estado;
    this.ativo = ativo;
  }
}
