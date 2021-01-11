import { Injectable } from '@nestjs/common';
import { Utils } from 'src/utils/utils';
import { fornecedores } from './db/fornecedores.data';
import {
  Fornecedor,
  Fornecedores,
  FornecedoresAPI,
} from './fornecedores.interface';

@Injectable()
export class FornecedoresService {
  fornecedores = fornecedores;

  getAll(search?: string, page?: string, pageSize?: string): FornecedoresAPI {
    return Utils.getCollection(this.fornecedores, search, page, pageSize);
  }

  getOne(id: string): Fornecedor {
    return Utils.getItem(id, this.fornecedores);
  }

  delete(id: string): { message: string } {
    try {
      this.fornecedores = Utils.delete(this.fornecedores, id, 'clientes');
    } catch (error) {
      throw error;
    }

    return { message: 'cliente removido com sucesso' };
  }

  deleteAll(itemsToDelete: Fornecedores): void {
    this.fornecedores = Utils.deleteAll(itemsToDelete, this.fornecedores);
  }

  save(item: Fornecedor): Fornecedor {
    this.fornecedores = Utils.save(item, this.fornecedores);
    return item;
  }

  update(id: string, updatedItem: Fornecedor): Fornecedor {
    this.fornecedores = Utils.update(id, updatedItem, this.fornecedores);
    return this.getOne(id);
  }
}
