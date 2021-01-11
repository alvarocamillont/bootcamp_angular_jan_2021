import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { ParamQueryId, QueryApi } from 'src/core/interfaces/query.interface';
import { Cliente, Clientes, ClientesAPI } from './clientes.interface';
import { ClientesService } from './clientes.service';
import { CreateClientesDto } from './dto/create-clientes.dto';
import { GetClientesDto } from './dto/get-clientes.dto';

@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @ApiResponse({ status: 200, type: GetClientesDto })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'filter', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  getAll(@Query() query: QueryApi): ClientesAPI {
    const { search, filter, page, pageSize } = query;

    return this.clientesService.getAll(search || filter, page, pageSize);
  }

  @ApiResponse({ status: 204 })
  @Delete()
  deleteAll(@Body() body: Clientes): void {
    this.clientesService.deleteAll(body);
  }

  @ApiResponse({ status: 200, type: CreateClientesDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  getOne(@Param() params: ParamQueryId): Cliente {
    return this.clientesService.getOne(params['id']);
  }

  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  delete(@Param() params: ParamQueryId): any {
    return this.clientesService.delete(params['id']);
  }

  @ApiResponse({ status: 201, type: CreateClientesDto })
  @ApiBody({ type: CreateClientesDto })
  @Post()
  save(@Body() cliente: Cliente): Cliente {
    return this.clientesService.save(cliente);
  }

  @ApiResponse({ status: 201, type: CreateClientesDto })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: CreateClientesDto })
  @Put(':id')
  update(@Body() cliente: Cliente, @Param() param: ParamQueryId): Cliente {
    return this.clientesService.update(param['id'], cliente);
  }
}
