import { ApiProperty } from '@nestjs/swagger';
import { CreateFornecedoresDto } from './create-fornecedores.dto';

export class GetFornecedoresDto {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateFornecedoresDto] })
  items: Array<CreateFornecedoresDto>;
}
