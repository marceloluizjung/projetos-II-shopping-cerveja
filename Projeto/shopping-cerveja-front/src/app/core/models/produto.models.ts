import { Vendedor } from "./vendedor. models";

export class Produto {
    id: number;
    descricao: string;
    quantidade: number;
    valor: number;
    vendedor: Vendedor;
    imagem: string;
}