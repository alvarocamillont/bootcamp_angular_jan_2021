import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Count } from 'src/core/interfaces/collection.interface';
import { ParamQueryId, QueryApi } from 'src/core/interfaces/query.interface';
import { CidadesAPI } from './cidades/cidades.interface';
import { CreateEstadosDto } from './dto/create-estados.dto';
import { GetCidadesDto } from './dto/get-cidades.dto';
import { GetEstadosDto } from './dto/get-estados.dto';
import { Estado, EstadosAPI } from './estados.interface';
import { EstadosService } from './estados.service';

@ApiTags('Estados')
@Controller('estados')
export class EstadosController {
  constructor(private estadosService: EstadosService) {}

  @ApiResponse({ status: 200, type: GetCidadesDto })
  @ApiParam({ name: 'id' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get(':id/cidades')
  getCidades(
    @Query() query: QueryApi,
    @Param() params: ParamQueryId,
  ): CidadesAPI {
    const { page, pageSize } = query;

    return this.estadosService.getCidadesDoEstado(params['id'], page, pageSize);
  }

  @ApiResponse({ status: 200, type: CreateEstadosDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  getEstado(@Param() params: ParamQueryId): Estado {
    return this.estadosService.getEstado(params['id']);
  }

  @ApiResponse({ status: 200, type: GetEstadosDto })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'filter', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  getEstados(@Query() query: QueryApi): EstadosAPI {
    const { search, filter, page, pageSize } = query;

    return this.estadosService.getEstados(search || filter, page, pageSize);
  }

}
