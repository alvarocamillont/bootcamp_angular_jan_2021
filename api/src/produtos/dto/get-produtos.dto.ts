import { ApiProperty } from '@nestjs/swagger';
import { CreateProdutosDto } from './create-produtos.dto';

export class GetProdutosDto {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateProdutosDto] })
  items: Array<CreateProdutosDto>;
}
