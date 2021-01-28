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

import {
  PoPageDynamicDetailOptions,
  PoPageDynamicEditOptions,
  PoPageDynamicTableOptions,
} from '@po-ui/ng-templates';

import { ParamQueryId, QueryApi } from 'src/core/interfaces/query.interface';
import { CreateProdutosDto } from './dto/create-produtos.dto';
import { GetProdutosDto } from './dto/get-produtos.dto';
import { Produto, Produtos, ProdutosAPI } from './produtos.interface';
import { ProdutosService } from './produtos.service';

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @ApiResponse({ status: 200, type: GetProdutosDto })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'filter', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  getAll(@Query() query: QueryApi): ProdutosAPI {
    const { search, filter, page, pageSize } = query;

    return this.produtosService.getProdutos(search || filter, page, pageSize);
  }

  @ApiResponse({ status: 204 })
  @Delete()
  deleteAll(@Body() body: Produtos): void {
    this.produtosService.deleteAll(body);
  }

  @ApiResponse({ status: 200, type: CreateProdutosDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  getOne(@Param() params: ParamQueryId): Produto {
    return this.produtosService.getProduto(params['id']);
  }

  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  delete(@Param() params: ParamQueryId): any {
    return this.produtosService.delete(params['id']);
  }

  @ApiResponse({ status: 201, type: CreateProdutosDto })
  @ApiBody({ type: CreateProdutosDto })
  @Post()
  save(@Body() produto: Produto): Produto {
    return this.produtosService.save(produto);
  }

  @ApiResponse({ status: 201 })
  @Post('/load/table')
  tableMetadata(): PoPageDynamicTableOptions {
    return this.produtosService.tableMetada();
  }

  @ApiResponse({ status: 201 })
  @Post('/load/edit')
  editMetadata(): PoPageDynamicEditOptions {
    return this.produtosService.editMetada();
  }

  @ApiResponse({ status: 201 })
  @Post('/load/view')
  viewMetadata(): PoPageDynamicDetailOptions {
    return this.produtosService.viewMetada();
  }

  @ApiResponse({ status: 201, type: CreateProdutosDto })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: CreateProdutosDto })
  @Put(':id')
  update(@Body() produto: Produto, @Param() param: ParamQueryId): Produto {
    return this.produtosService.update(param['id'], produto);
  }
}
