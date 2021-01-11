import { Collection, Item } from 'src/core/interfaces/collection.interface';

export interface FornecedoresAPI extends Collection {
  items: Fornecedores;
}

export type Fornecedores = Array<Fornecedor>;

export interface Fornecedor extends Item {
  nome?: string;
  endereco?: string;
  cidade?: string;
  estado?: string;
}
