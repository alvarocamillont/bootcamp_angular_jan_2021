/*
    Dado um retorno da api, crie funções para as seguintes situações:

    Média de preço do pedido
    Nome do produto mais barato
    filtro por código do produto (retorna o item)
    busca de produto por nome (retorna o item)
*/

export const api: Pedido = {
  numeroPedido: '0001',
  cliente: 'Alvaro',
  items: [
    { produto: '0001', descricao: 'XBOX', preco: 5000 },
    { produto: '0002', descricao: 'PS5', preco: 5500 },
    { produto: '0003', descricao: 'PC', preco: 10000 },
    { produto: '0004', descricao: 'SWITCH', preco: 1000 },
    { produto: '0005', descricao: 'ATARI', preco: 500 },
  ],
};

export interface Item {
  produto: string;
  descricao: string;
  preco: number;
}

export interface Cliente {
  nome: string;
  profissao: string;
}

type Items = Array<Item>;

export interface Pedido {
  numeroPedido: string;
  cliente: string;
  items: Items;
}

export function mediaPedido(pedido: Pedido) {
  const { items } = pedido;
  return (
    items.reduce((acumulador, item) => acumulador + item.preco, 0) /
    items.length
  );
}

export function produtoMaisBarato(pedido: Pedido) {
  const { items } = pedido;
  const [maisBarato] = items.sort(
    (itemAnterior, proximoItem) => itemAnterior.preco - proximoItem.preco,
  );
  return maisBarato['descricao'];
}

export function filtroPorCodigo(pedido: Pedido, codigo: string) {
  const { items } = pedido;
  return items.filter((item) => item.produto === codigo);
}

export function buscaPorNome(pedido: Pedido, descricao: string) {
  const { items } = pedido;
  return buscaItem<Item>(items, 'descricao', descricao);
}

export function buscaClientesPorNome(
  clientes: Array<Cliente>,
  nomeDoCliente: string,
) {
  return buscaItem<Cliente>(clientes, 'nome', nomeDoCliente);
}

function buscaItem<T>(items: Array<T>, atributo: keyof T, chave: any) {
  return items.find((item) => item[atributo] === chave);
}
