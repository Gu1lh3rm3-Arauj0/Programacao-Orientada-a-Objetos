/*
Aline Nataly Lima de Moura - 164905
Guilherme Araújo Mendes de Souza - 156437
Isaque Ribeiro Carneiro - 163810
Renata  Moura Barreto - 163983
*/

import { SistemaLocacao } from "./sistema";

const sistema = new SistemaLocacao();
sistema.cadastrarBicicleta("Bike A", 100);
sistema.cadastrarCliente("João", "123.456.789-00", "12 3456-7890", 10);

const bicicleta = sistema.bicicletas[0];
const cliente = sistema.clientes[0];

sistema.realizarAluguel(cliente, bicicleta, 3);