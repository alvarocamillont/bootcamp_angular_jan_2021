import { Collection, Item } from 'src/core/interfaces/collection.interface';

export interface ProdutosAPI extends Collection {
  items: Produtos;
}

export type Produtos = Array<Produto>;

export interface Produto extends Item {
  descricao?: string;
  preco?: number;
  categoria?: string;
  unidadeMedida?: string;
}
