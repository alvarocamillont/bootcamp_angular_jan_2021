import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrls: ['./exemplos-angular.component.css'],
})
export class ExemplosAngularComponent {
  @Input()
  nomeAluno = 'Alvaro';

  @Input()
  listaAlunos!: Alunos;

  turma = 'Angular';

  mostraLista = true;

  @Output()
  selecaoTurma = new EventEmitter<string>();

  atualizaTurma(input: any) {
    console.log('Botão');
    console.log(this.listaAlunos);
    this.turma = input.value;
    this.selecaoTurma.emit(this.turma);
  }

  abriLista() {
    this.mostraLista = !this.mostraLista;
  }
}
