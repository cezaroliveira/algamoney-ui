export interface Lancamento {
  codigo: number;
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  tipo: string;
}
