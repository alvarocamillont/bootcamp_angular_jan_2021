import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoNotificationService } from '@po-ui/ng-components';
import { switchMap } from 'rxjs/operators';
import { CidadesService } from 'src/app/shared/servicos/cidades.service';
import { EstadosService } from 'src/app/shared/servicos/estados.service';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css'],
})
export class ClienteDetalheComponent implements OnInit {
  cliente: Cliente;
  titulo: string;

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private poAlert: PoDialogService,
    private poNotification: PoNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.clientesService.retornaClienteComEnderecoCompleto(params.id)
        )
      )
      .subscribe((cliente) => {
        this.cliente = cliente;
      });
  }

  get sexo(): string {
    const sexoOpt = {
      M: 'Masculino',
      F: 'Feminino',
      P: 'Prefiro não informar',
    };

    return sexoOpt[this.cliente.sexo] ?? sexoOpt.P;
  }

  voltar() {
    window.history.back();
  }

  remover() {
    this.poAlert.confirm({
      title: 'Confirmação de exclusão',
      message: ` Você tem certeza que quer apagar o cliente ${this.cliente.nome} ?`,
      confirm: () => {
        this.excluirCliente(this.cliente.id);
      },
    });
  }

  private excluirCliente(id: string) {
    this.clientesService.apagaCliente(id).subscribe((_) => {
      this.poNotification.success('Cliente excluído');
      this.router.navigate(['home/clientes']);
    });
  }

  editar() {}
}
