import { Component, OnInit, Input } from '@angular/core';

import { PessoaService } from './../pessoa.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css'],
})
export class PessoaPesquisaComponent implements OnInit {
  nome: string;
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.pessoaService.pesquisar({
      nome: this.nome
    }).subscribe(retorno => {
      this.pessoas = retorno.content;
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
