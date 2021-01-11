import { Users } from '../users.interface';

export const users: Users = [
  {
    id: '1',
    username: 'admin',
    password: 'admin',
    isSuperUser: true
  },
  {
    id: '2',
    username: 'alvaro',
    password: '123',
    isSuperUser: false
  },
];
