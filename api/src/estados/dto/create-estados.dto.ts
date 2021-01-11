import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEstadosDto {
         @ApiPropertyOptional()
         id: string;

         @ApiPropertyOptional()
         sigla: string;

         @ApiPropertyOptional()
         nome: string;

       }
