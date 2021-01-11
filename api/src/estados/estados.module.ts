import { Module } from '@nestjs/common';
import { EstadosController } from './estados.controller';
import { EstadosService } from './estados.service';
import { CidadesService } from './cidades/cidades.service';
import { CidadesController } from './cidades/cidades.controller';

@Module({
  controllers: [EstadosController, CidadesController],
  providers: [EstadosService, CidadesService]
})
export class EstadosModule {}
