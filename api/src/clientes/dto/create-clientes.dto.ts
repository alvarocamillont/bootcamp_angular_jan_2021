import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClientesDto {
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

  @ApiPropertyOptional()
  sexo?: string;
  
  @ApiPropertyOptional()
  dataNascimento?: Date;
}
