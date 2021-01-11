import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { EstadosModule } from './estados/estados.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    FornecedoresModule,
    ClientesModule,
    ProdutosModule,
    EstadosModule,
    AuthModule,
    CoreModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
