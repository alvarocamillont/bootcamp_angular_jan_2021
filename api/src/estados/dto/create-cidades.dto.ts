import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCidadesDto {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  estado: string;

  @ApiPropertyOptional()
  nome: string;

}
