import { Bicicleta } from "./bicicleta";
import { Cliente } from "./clientes";
import { Aluguel } from "./aluguel";

export class SistemaLocacao {
    bicicletas: Bicicleta[];
    clientes: Cliente[];
    alugueis: Aluguel[];
  
    constructor() {
      this.bicicletas = [];
      this.clientes = [];
      this.alugueis = [];
    }

    cadastrarBicicleta(modelo: string, valor_diaria: number) {
        const bicicleta = new Bicicleta(modelo, valor_diaria);
        this.bicicletas.push(bicicleta);
    }
    
    cadastrarCliente(nome: string, cpf: string, telefone: string, idade: number) {
        const cliente = new Cliente(nome, cpf, telefone, idade);
        this.clientes.push(cliente);
    }
    
    realizarAluguel(cliente: Cliente, bicicleta: Bicicleta, dias: number) {
        if (bicicleta.reservada) {
          console.log("Bicicleta já está reservada.");
          return;
     }
    
    const aluguel = new Aluguel(bicicleta.valor_diaria, dias);
    bicicleta.reservada = true;
    this.alugueis.push(aluguel);
    
    console.log(`Aluguel realizado para ${cliente.nome}. Valor total: R$${aluguel.valor_total.toFixed(2)}`);
    
    }
}
