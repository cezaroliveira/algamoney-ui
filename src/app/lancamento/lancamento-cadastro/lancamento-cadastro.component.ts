import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/pessoa/pessoa-pesquisa/pessoa-pesquisa.component';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css'],
})
export class LancamentoCadastroComponent implements OnInit {
  categorias: Categoria[];
  pessoas: Pessoa[];

  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  invalidDates: Array<Date>;
  pt: any;

  ngOnInit(): void {
    this.inicializarCategorias();

    this.inicializarPessoas();

    this.inicializarLocale();
  }

  inicializarCategorias(): void {
    this.categorias = [
      new Categoria(1, 'Alimentação'),
      new Categoria(2, 'Transporte'),
    ];
  }

  inicializarPessoas(): void {
    this.pessoas = [
      new Pessoa('João', 'Contagem', 'MG', true),
      new Pessoa('Pedro', 'Betim', 'MG', true),
      new Pessoa('Maria', 'Rio de Janeiro', 'RJ', false),
    ];
  }

  inicializarLocale(): void {
    this.pt = {
      firstDayOfWeek: 1,
      dayNames: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
      ],
      dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Marco',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      monthNamesShort: [
        'jan',
        'fev',
        'mar',
        'abr',
        'mai',
        'jun',
        'jul',
        'ago',
        'set',
        'out',
        'nov',
        'dez',
      ],
      today: 'Hoje',
      clear: 'Borrar',
    };

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = prevMonth === 11 ? year - 1 : year;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    const invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }
}
export class Categoria {
  id: number;
  nome: string;
  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }
}
