import { ApiProperty } from '@nestjs/swagger';
import { CreateClientesDto } from './create-clientes.dto';

export class GetClientesDto {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateClientesDto] })
  items: Array<CreateClientesDto>;
}
