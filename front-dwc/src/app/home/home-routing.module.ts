import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'clientes',
        loadChildren: () =>
          import('../clientes/clientes.module').then(
            (file) => file.ClientesModule
          ),
      },
      {
        path: 'produtos',
        loadChildren: () =>
          import('../produtos/produtos.module').then(
            (file) => file.ProdutosModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
