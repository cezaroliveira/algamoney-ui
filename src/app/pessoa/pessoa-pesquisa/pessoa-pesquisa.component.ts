import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css'],
})
export class PessoaPesquisaComponent implements OnInit {
  pessoas: any[] = [];
  // pessoas = [
  //   new Pessoa('João', 'Contagem', 'MG', true),
  //   new Pessoa('Pedro', 'Betim', 'MG', true),
  //   new Pessoa('Maria', 'Rio de Janeiro', 'RJ', false),
  // ];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoaService.pesquisar().subscribe(retorno => {
      this.pessoas = retorno/*.content*/;
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
