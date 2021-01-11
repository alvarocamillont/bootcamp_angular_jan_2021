import { Injectable } from '@nestjs/common';
import { Count } from 'src/core/interfaces/collection.interface';
import { Utils } from 'src/utils/utils';
import { CidadesAPI } from './cidades/cidades.interface';
import { CidadesService } from './cidades/cidades.service';
import { estados } from './db/estados.data';
import { Estado, EstadosAPI } from './estados.interface';

@Injectable()
export class EstadosService {
  constructor(private cidadeService: CidadesService) {}

  estados = estados;

  getEstados(search?: string, page?: string, pageSize?: string): EstadosAPI {
    return Utils.getCollection(this.estados, search, page, pageSize);
  }

  getCidadesDoEstado(
    idEstado: string,
    page?: string,
    pageSize?: string,
  ): CidadesAPI {
    return this.cidadeService.getCidadesPorEstado(idEstado, page, pageSize);
  }

  getEstado(id: string): Estado {
    return Utils.getItem(id, this.estados);
  }
  
}
