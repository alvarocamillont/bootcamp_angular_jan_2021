import { Injectable } from '@nestjs/common';
import { Utils } from 'src/utils/utils';
import { users } from './db/users.data';
import { User, Users, UsersAPI } from './users.interface';

@Injectable()
export class UsersService {
  users = users;

  getUsers(search?: string, page?: string, pageSize?: string): UsersAPI {
    return Utils.getCollection(this.users, search, page, pageSize);
  }

  getUser(id: string): User {
    return Utils.getItem(id, this.users);
  }

  delete(id: string): { message: string } {
    try {
      this.users = Utils.delete(this.users, id, 'Users');
    } catch (error) {
      throw error;
    }

    return { message: 'User removida com sucesso' };
  }

  deleteAll(usersToDelete: Users): void {
    this.users = Utils.deleteAll(usersToDelete, this.users);
  }

  save(user: User): User {
    this.users = Utils.save(user, this.users);
    return user;
  }

  update(id: string, updatedUser: User): User {
    this.users = Utils.update(id, updatedUser, this.users);
    return this.getUser(id);
  }

  async findByUserName(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
