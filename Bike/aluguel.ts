export class Aluguel {
    valor_diaria: number;
    dias_do_aluguel: number;
    valor_total: number;
  
    constructor(valor_diaria: number, dias_do_aluguel: number) {
      this.valor_diaria = valor_diaria;
      this.dias_do_aluguel = dias_do_aluguel;
      this.valor_total = valor_diaria * dias_do_aluguel;
    }
  }