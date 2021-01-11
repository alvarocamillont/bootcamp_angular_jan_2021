import { Collection, Item } from 'src/core/interfaces/collection.interface';

export interface Estado extends Item {
  id: string;
  sigla?: string;
  nome?: string;
}

export type Estados = Array<Estado>;

export interface EstadosAPI extends Collection {
  items: Estados;
}
