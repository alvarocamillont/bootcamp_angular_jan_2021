import { NotFoundException } from '@nestjs/common';
import {
  Collection,
  Item,
  Items,
} from 'src/core/interfaces/collection.interface';
import { v4 as uuid } from 'uuid';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export abstract class Utils {
  static paginate(items: Items, page = 1, pageSize?: number): Items {
    if (pageSize) {
      return items.slice((page - 1) * pageSize, page * pageSize);
    }

    return items;
  }

  static filterByAll(label: string, items: Items) {
    const filter = label.toLowerCase().trim();

    return items.filter(item => {
      const findByProperty = (property: string): any => {
        return (
          typeof item[property] === 'string' &&
          item[property].toLowerCase().includes(filter)
        );
      };

      return Object.keys(item).some(findByProperty);
    });
  }

  static getItem(id: string, items: Items): Item {
    return items.find(item => item.id === id);
  }

  static getCollection(
    items: Items,
    search?: string,
    page?: string,
    pageSize?: string,
  ): Collection {
    let filteredItems = this.filter(items, search);

    filteredItems = this.paginate(
      filteredItems,
      parseInt(page, 10),
      parseInt(pageSize, 10),
    );

    return {
      items: filteredItems,
      hasNext: items.length > parseInt(pageSize, 10) * parseInt(page, 10),
    };
  }

  static filter(items: Items, search?: string) {
    return search ? this.filterByAll(search, items) : items;
  }

  static delete(items: Items, id: string, entityName: string): Items {
    const index = items.findIndex(user => user.id === id);

    if (index === -1) {
      throw new NotFoundException(`${entityName} ${id} não existe!`);
    }

    return items.filter(user => user.id !== id);
  }

  static deleteAll(itemsToDelete: Items, item: Items): Items {
    return item.filter(
      item => !itemsToDelete.find(itemToDelete => itemToDelete.id === item.id),
    );
  }

  static save(item: Item, items: Items): Items {
    item = this.newItem(item);
    return [...items, item];
  }

  static update(id: string, updatedItem: Item, items: Items): Items {
    const item = this.getItem(id, items);
    updatedItem = this.newItem(updatedItem);
    let updated: Item;

    if (item) {
      updated = { ...item, ...updatedItem };
    } else {
      updated = { ...updatedItem };
    }

    return items.map(item => (item.id === id ? updated : item));
  }

  static saveAll(itemsToSave: Items, items: Items): Items {
    itemsToSave.forEach(itemToSave => (items = this.save(itemToSave, items)));
    return items;
  }

  static updateAll(itemsToUpdate: Items, items: Items): Items {
    itemsToUpdate.forEach(
      itemsToUpdate =>
        (items = this.update(itemsToUpdate.id, itemsToUpdate, items)),
    );
    return items;
  }

  static newItem(item: Item): Item {
    const id = item?.id ?? uuid();
    return { ...item, id };
  }
}
