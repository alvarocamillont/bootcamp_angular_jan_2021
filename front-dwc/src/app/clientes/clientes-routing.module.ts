import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'view/:id', component: ClienteDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
