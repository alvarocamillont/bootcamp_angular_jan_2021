import { Collection, Item } from 'src/core/interfaces/collection.interface';

export interface Cidade extends Item {
  id: string;
  nome: string;
  estado: string;
}

export type Cidades = Array<Cidade>;

export interface CidadesAPI extends Collection {
  items: Cidades;
}
