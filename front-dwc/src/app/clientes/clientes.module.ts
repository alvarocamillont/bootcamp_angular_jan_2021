import { NgModule } from '@angular/core';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  declarations: [ClientesComponent, ClienteDetalheComponent],
  imports: [ClientesRoutingModule, SharedModule],
})
export class ClientesModule {}
