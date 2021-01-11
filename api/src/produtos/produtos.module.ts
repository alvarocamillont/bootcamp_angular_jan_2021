import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';

@Module({
  providers: [ProdutosService],
  controllers: [ProdutosController]
})
export class ProdutosModule {}
