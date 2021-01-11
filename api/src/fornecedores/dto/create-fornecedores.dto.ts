import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFornecedoresDto {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  nome?: string;

  @ApiPropertyOptional()
  endereco?: string;

  @ApiPropertyOptional()
  cidade?: string;

  @ApiPropertyOptional()
  estado?: string;

}
