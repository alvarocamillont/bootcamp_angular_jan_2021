import type { Aluno } from './exemplo-objetos';

const alunos = ['Alvaro', 'Mario', 'Gabriel', 112];

export function listaDeAlunos() {
  /*
  for (let contador = 0; contador < alunos.length; contador++) {
    const element = alunos[contador];
    console.log(element);
  }

  for (const elemento of alunos) {
    console.log(elemento);
  }
*/
  /*
  alunos.forEach((itemdoArray) => {
    console.log(itemdoArray);
  });*/

  meuForEach(alunos, mostraAluno);
}

function mostraAluno(item: any) {
  console.log(item);
}

function meuForEach(colecao: Array<any>, callback: Function) {
  for (const elemento of colecao) {
    callback(elemento);
  }
}

export function somaNotas(notas: Array<number>) {
  /*
  let soma = 0;
  for (const nota of notas) {
    soma = soma + nota;
  }
  return soma;*/

  return notas.reduce((soma, nota) => soma + nota, 0);
}

class AlunoClasse implements Aluno {
  constructor(public nome: string, public nota: number) {}
}

export function montaTurma() {
  return [
    new AlunoClasse('Alvaro', 10),
    new AlunoClasse('Mario', 8),
    new AlunoClasse('Gabriel', 8),
  ];
}

export function filtraAlunoPorNota(turma: Array<Aluno>, nota: number) {
  /*
  let turmaFiltrada: any = [];

  for (const aluno of turma) {
    if (callback(aluno)) {
      turmaFiltrada.push(aluno);
    }
  }

  return turmaFiltrada;
  */

  return turma.filter((aluno) => aluno.nota === nota);
}

export function buscaAlunoPorNota(turma: Array<Aluno>, nota: number) {
  return turma.find((alunos) => alunos.nota === nota);
}

export function tirarPontoTurma(turma: Array<Aluno>, pontoNegativo: number) {
  let turmaNegativa: Array<Aluno> = [];

  turmaNegativa = turma.map((aluno) => {
    aluno.nota -= pontoNegativo;
    return aluno;
  });

  return turmaNegativa;
}

export function mostraArray() {
  const cliente1 = ['Alvaro', 'Gabriel'];
  const cliente2 = [...cliente1];

  const [primeiro, outroItem, terceiro] = cliente1;

  cliente2.push('Ricardo');

  console.log(cliente2);
  console.log(cliente1);
  console.log(primeiro, outroItem, terceiro);
}
