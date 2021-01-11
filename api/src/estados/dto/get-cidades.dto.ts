import { ApiProperty } from '@nestjs/swagger';
import { CreateCidadesDto } from './create-cidades.dto';

export class GetCidadesDto {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateCidadesDto] })
  items: Array<CreateCidadesDto>;

}
