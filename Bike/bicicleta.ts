export class Bicicleta {
    modelo: string;
    valor_diaria: number;
    reservada: boolean;
  
    constructor(modelo: string, valor_diaria: number) {
      this.modelo = modelo;
      this.valor_diaria = valor_diaria;
      this.reservada = false;
    }
  }