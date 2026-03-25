import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda {
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produto[];

    constructor(codigo: number, data: number, cliente: Cliente, produtos: Produto[]) {
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }

    get codigo(): number {
        return this._codigo;
    }

    set codigo(codigo: number) {
        this._codigo = codigo;
    }

    get data(): number {
        return this._data;
    }

    set data(data: number) {
        this._data = data;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    get produtos(): Produto[] {
        return this._produtos;
    }

    set produtos(produtos: Produto[]) {
        this._produtos = produtos;
    }

public calcularTotal(): number {
    let total = this._produtos
        .map(p => p.valor)
        .reduce((acc, valor) => acc + valor, 0);

    return total;
}
}

