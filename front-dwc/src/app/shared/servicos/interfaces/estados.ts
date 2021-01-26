export interface EstadoAPI {
  items: Estados;
  hasNext: boolean;
}

export type Estados = Array<Estado>;

export interface Estado {
  id: string;
  sigla: string;
  nome: string;
}
