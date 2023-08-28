export class Cliente {
    nome: string;
    cpf: string;
    telefone: string;
    idade: number;
  
    constructor(nome: string, cpf: string, telefone: string, idade: number) {
      this.nome = nome;
      this.cpf = cpf;
      this.telefone = telefone;
      this.idade = idade;
    }
  }