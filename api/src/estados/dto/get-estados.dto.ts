import { ApiProperty } from '@nestjs/swagger';
import { CreateEstadosDto } from './create-estados.dto';

export class GetEstadosDto {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateEstadosDto] })
  items: Array<CreateEstadosDto>;

}
