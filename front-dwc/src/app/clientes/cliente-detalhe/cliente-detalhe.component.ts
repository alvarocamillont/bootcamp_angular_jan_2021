import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css'],
})
export class ClienteDetalheComponent implements OnInit {
  cliente: Cliente;

  constructor() {}

  ngOnInit(): void {}
}
