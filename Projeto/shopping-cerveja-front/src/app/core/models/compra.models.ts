import { Cliente } from "./cliente.models";
import { Produto } from "./produto.models";

export class Compra {
    cliente: Cliente;
    dataCriacao: Date;
    id: number;
    produtos: Produto[];
    valor: number;
}