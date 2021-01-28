import { Component, OnInit } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  actions: PoPageDynamicTableActions = {
    detail: 'home/produtos/view/:id',
    edit: 'home/produtos/edit/:id',
    new: 'home/produtos/new',
    remove: true,
  };

  fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true },
    { property: 'descricao', label: 'Descrição' },
    { property: 'preco', label: 'Preço do Produto', type: 'currency' },
  ];
}
