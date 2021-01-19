import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrls: ['./exemplos-angular.component.css'],
})
export class ExemplosAngularComponent {
  nomeAluno = 'Alvaro';
  turma = 'Angular';

  atualizaTurma(turma: string) {
    this.turma = turma;
  }
}
