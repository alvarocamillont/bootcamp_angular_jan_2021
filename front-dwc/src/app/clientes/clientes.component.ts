import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  PoBreadcrumb,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { Observable, Subscription } from 'rxjs';
import { CidadesService } from '../shared/servicos/cidades.service';
import { EstadosService } from '../shared/servicos/estados.service';
import { ClientesService } from './clientes.service';
import { Cliente, Clientes } from './models/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  actions: Array<PoPageAction> = [
    {
      label: 'Incluir',
      url: 'home/clientes/new',
    },
  ];

  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/home' }, { label: 'Cliente' }],
  };

  items$: Observable<Clientes>;

  colunas: Array<PoTableColumn> = [
    { property: 'id', label: 'ID', type: 'string' },
    { property: 'nome', label: 'Nome', type: 'string' },
    { property: 'endereco', label: 'Endereço', type: 'string' },
    { property: 'dataNascimento', label: 'Data Nascimento', type: 'date' },
  ];

  tableActions: Array<PoTableAction> = [
    { action: this.visualizar.bind(this), label: 'Visualizar' },
    { action: this.editar.bind(this), label: 'Editar' },
  ];

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items$ = this.clientesService.retornaClientes();
  }

  visualizar(cliente: Cliente) {
    this.router.navigate(['home/clientes/view', cliente.id]);
  }

  editar() {}
}
