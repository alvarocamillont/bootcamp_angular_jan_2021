import { Collection, Item } from 'src/core/interfaces/collection.interface';

export interface ClientesAPI extends Collection {
  items: Clientes;
}

export type Clientes = Array<Cliente>;

export interface Cliente extends Item {
  nome?: string;
  endereco?: string;
  cidade?: string;
  estado?: string;
  sexo?: string;
  dataNascimento?: Date | string;
}
