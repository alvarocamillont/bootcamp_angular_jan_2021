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

mostraArray();
mostraAluno();

const alunoNovo = retornaAluno('Lucas', 8);
console.log(alunoNovo);

estaProvado(10);
estaProvado(0);

const turma: any = {};

imprimeTurma(turma);
