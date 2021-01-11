import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';

@Module({
  providers: [ClientesService],
  controllers: [ClientesController],
})
export class ClientesModule {}
