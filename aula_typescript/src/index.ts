import {
  buscaAlunoPorNota,
  listaDeAlunos,
  montaTurma,
  mostraArray,
  somaNotas,
  tirarPontoTurma,
} from './exemplos/arrays';
import { exemploIfLoop, exemploTipos } from './exemplos/primitivos';
import {
  estaProvado,
  filtraAlunoPorNota,
  imprimeTurma,
  mostraAluno,
  retornaAluno,
  Turma,
} from './exemplos/exemplo-objetos';
import {
  api,
  buscaPorNome,
  filtroPorCodigo,
  mediaPedido,
  produtoMaisBarato,
} from './exemplos/exercicio';

console.log(`A média do pedido ${mediaPedido(api)}`);
console.log(`O produto mais barato é  ${produtoMaisBarato(api)}`);
console.log(`O produto do código 0001 `, filtroPorCodigo(api, '0001'));
console.log(`O produto da descrição SWITCH é `, buscaPorNome(api, 'SWITCH'));
