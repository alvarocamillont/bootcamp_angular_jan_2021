import { type } from 'os';

export interface Collection {
  hasNext?: boolean;
  items: Items;
}

export interface Item {
  id: string;
}

export type Items = Array<Item>;

export interface Count {
  length?: number;
}
