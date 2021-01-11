import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProdutosDto {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  descricao?: string;

  @ApiPropertyOptional()
  preco?: number;

}
