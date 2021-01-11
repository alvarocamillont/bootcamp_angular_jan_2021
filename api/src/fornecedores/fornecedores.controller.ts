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
import { GetFornecedoresDto } from './dto/get-fornecedores.dto';
import {
  Fornecedor,
  Fornecedores,
  FornecedoresAPI,
} from './fornecedores.interface';
import { FornecedoresService } from './fornecedores.service';

@ApiTags('Fornecedores')
@Controller('fornecedores')
export class FornecedoresController {
  constructor(private fornecedoresService: FornecedoresService) {}

  @ApiResponse({ status: 200, type: GetFornecedoresDto })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'filter', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  getAll(@Query() query: QueryApi): FornecedoresAPI {
    const { search, filter, page, pageSize } = query;

    return this.fornecedoresService.getAll(search || filter, page, pageSize);
  }

  @ApiResponse({ status: 204 })
  @Delete()
  deleteAll(@Body() body: Fornecedores): void {
    this.fornecedoresService.deleteAll(body);
  }

  @ApiResponse({ status: 200, type: GetFornecedoresDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  getOne(@Param() params: ParamQueryId): Fornecedor {
    return this.fornecedoresService.getOne(params['id']);
  }

  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  delete(@Param() params: ParamQueryId): any {
    return this.fornecedoresService.delete(params['id']);
  }

  @ApiResponse({ status: 201, type: GetFornecedoresDto })
  @ApiBody({ type: GetFornecedoresDto })
  @Post()
  save(@Body() fornecedor: Fornecedor): Fornecedor {
    return this.fornecedoresService.save(fornecedor);
  }

  @ApiResponse({ status: 201, type: GetFornecedoresDto })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: GetFornecedoresDto })
  @Put(':id')
  update(
    @Body() fornecedor: Fornecedor,
    @Param() param: ParamQueryId,
  ): Fornecedor {
    return this.fornecedoresService.update(param['id'], fornecedor);
  }
}
