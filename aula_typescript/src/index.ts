import {
  buscaAlunoPorNota,
  listaDeAlunos,
  montaTurma,
  somaNotas,
  tirarPontoTurma,
} from './exemplos/arrays';
import { exemploIfLoop, exemploTipos } from './exemplos/primitivos';
import { filtraAlunoPorNota } from './exemplos/exemplo-objetos';

const turma = montaTurma();

console.log(filtraAlunoPorNota(turma));
