import { Module } from '@nestjs/common';
import { FornecedoresController } from './fornecedores.controller';
import { FornecedoresService } from './fornecedores.service';

@Module({
  providers: [FornecedoresService],
  controllers: [FornecedoresController],
})
export class FornecedoresModule {}
