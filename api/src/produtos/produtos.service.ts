import { Injectable } from '@nestjs/common';
import { Utils } from 'src/utils/utils';
import { produtos } from './db/produtos.data';
import { Produto, Produtos, ProdutosAPI } from './produtos.interface';

@Injectable()
export class ProdutosService {
  produtos = produtos;

  getProdutos(search?: string, page?: string, pageSize?: string): ProdutosAPI {
    return Utils.getCollection(this.produtos, search, page, pageSize);
  }

  getProduto(id: string): Produto {
    return Utils.getItem(id, this.produtos);
  }

  delete(id: string): { message: string } {
    try {
      this.produtos = Utils.delete(this.produtos, id, 'Produtos');
    } catch (error) {
      throw error;
    }

    return { message: 'Produto removida com sucesso' };
  }

  deleteAll(ProdutosToDelete: Produtos): void {
    this.produtos = Utils.deleteAll(ProdutosToDelete, this.produtos);
  }

  save(Produto: Produto): Produto {
    this.produtos = Utils.save(Produto, this.produtos);
    return Produto;
  }

  update(id: string, updatedProduto: Produto): Produto {
    this.produtos = Utils.update(id, updatedProduto, this.produtos);
    return this.getProduto(id);
  }

  tableMetada() {
    return {
      fields: [
        { property: 'categoria', label: 'Categoria' },
        { property: 'unidadeMedida', label: 'Unidade de Medida' },
      ],
    };
  }

  editMetada() {
    return {
      fields: [
        { property: 'categoria', label: 'Categoria' },
        { property: 'unidadeMedida', label: 'Unidade de Medida' },
      ],

    };
  }

  viewMetada() {
    return {
      fields: [
        { property: 'categoria', label: 'Categoria' },
        { property: 'unidadeMedida', label: 'Unidade de Medida' },
      ],
      
    };
  }
}
