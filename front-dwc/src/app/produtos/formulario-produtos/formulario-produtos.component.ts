import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-formulario-produtos',
  templateUrl: './formulario-produtos.component.html',
  styleUrls: ['./formulario-produtos.component.css'],
})
export class FormularioProdutosComponent implements OnInit {
  title = 'Novo Produto';

  actions: PoPageDynamicEditActions = {
    cancel: '/home/produtos',
    save: '/home/produtos',
  };

  altera = true;

  fields: Array<PoPageDynamicEditField>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.altera = !!id;
      this.configuraField();
      this.title = id ? `Editando ${id}` : 'Novo produto';
    });
  }

  private configuraField() {
    this.fields = [
      { property: 'id', key: true, label: 'ID', disabled: this.altera },
      { property: 'descricao', label: 'Descrição' },
      { property: 'preco', label: 'Preços', type: 'currency' },
    ];
  }
}
