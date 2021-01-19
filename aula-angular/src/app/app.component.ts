import { Component } from '@angular/core';

const URL = 'http://api.com';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Teste Angular';
  nome = 'Alvaro';

  numero1 = 5;
  numero2 = 10;
}
