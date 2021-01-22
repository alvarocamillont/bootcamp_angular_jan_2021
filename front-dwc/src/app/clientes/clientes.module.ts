import { NgModule } from '@angular/core';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClientesComponent],
  imports: [ClientesRoutingModule, SharedModule],
})
export class ClientesModule {}
