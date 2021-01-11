import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Count } from 'src/core/interfaces/collection.interface';
import { ParamQueryId, QueryApi } from 'src/core/interfaces/query.interface';
import { CreateCidadesDto } from '../dto/create-cidades.dto';
import { GetCidadesDto } from '../dto/get-cidades.dto';
import { Cidade, CidadesAPI } from './cidades.interface';
import { CidadesService } from './cidades.service';

@ApiTags('Cidades')
@Controller('cidades')
export class CidadesController {
  constructor(private cidadesService: CidadesService) {}

  @ApiResponse({ status: 200, type: CreateCidadesDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  getCidade(@Param() params: ParamQueryId): Cidade {
    return this.cidadesService.getCidade(params['id']);
  }
}
