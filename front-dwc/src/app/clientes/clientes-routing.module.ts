import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientesComponent } from './clientes.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'view/:id', component: ClienteDetalheComponent },
  { path: 'edit/:id', component: FormularioClienteComponent },
  { path: 'new', component: FormularioClienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
