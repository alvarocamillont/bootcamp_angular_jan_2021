import { Injectable } from '@nestjs/common';
import { Utils } from 'src/utils/utils';
import { Cliente, Clientes, ClientesAPI } from './clientes.interface';
import { clientes } from './db/clientes.data';

@Injectable()
export class ClientesService {
  clientes = clientes;

  getAll(search?: string, page?: string, pageSize?: string): ClientesAPI {
    return Utils.getCollection(this.clientes, search, page, pageSize);
  }

  getOne(id: string): Cliente {
    return Utils.getItem(id, this.clientes);
  }

  delete(id: string): { message: string } {
    try {
      this.clientes = Utils.delete(this.clientes, id, 'clientes');
    } catch (error) {
      throw error;
    }

    return { message: 'cliente removido com sucesso' };
  }

  deleteAll(itemsToDelete: Clientes): void {
    this.clientes = Utils.deleteAll(itemsToDelete, this.clientes);
  }

  save(item: Cliente): Cliente {
    this.clientes = Utils.save(item, this.clientes);
    return item;
  }

  update(id: string, updatedItem: Cliente): Cliente {
    this.clientes = Utils.update(id, updatedItem, this.clientes);
    return this.getOne(id);
  }
}
