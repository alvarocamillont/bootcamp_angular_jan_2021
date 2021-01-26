export interface CidadesAPI {
  items: Cidades;
  hasNext: boolean;
}

export type Cidades = Array<Cidade>;

export interface Cidade {
  id: string;
  nome: string;
  estado: string;
}
