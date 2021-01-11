import { Injectable } from '@nestjs/common';
import { Count } from 'src/core/interfaces/collection.interface';
import { Utils } from 'src/utils/utils';
import { cidades } from '../db/cidades.data';
import { Cidade, CidadesAPI } from './cidades.interface';

@Injectable()
export class CidadesService {
  cidades = cidades;

  getCidadesPorEstado(
    estado: string,
    page?: string,
    pageSize?: string,
  ): CidadesAPI {
    let filteredCidades = this.filterPorEstado(estado);
    filteredCidades = this.paginate(
      filteredCidades,
      parseInt(page, 10),
      parseInt(pageSize, 10),
    );

    return {
      items: filteredCidades,
      hasNext:
        this.cidades.length > parseInt(pageSize, 10) * parseInt(page, 10),
    };
  }

  getCidade(id: string): Cidade {
    return this.cidades.find(estado => estado.id === id);
  }

  private filterPorEstado(estado: string) {
    return cidades.filter(cidade => cidade.estado === estado);
  }

  private paginate(filteredLecture, page?: number, pageSize?: number) {
    if (pageSize || page) {
      return Utils.paginate(filteredLecture, page, pageSize);
    }

    return filteredLecture;
  }

}
