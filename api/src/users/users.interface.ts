import { Collection, Item } from 'src/core/interfaces/collection.interface';

export interface UsersAPI extends Collection {
  items: Users;
}

export type Users = Array<User>;

export interface User extends Item {
  username?: string;
  password?: string;
  isSuperUser?: boolean;
}
