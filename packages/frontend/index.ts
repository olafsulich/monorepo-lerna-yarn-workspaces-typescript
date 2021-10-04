import { v4 as uuidv4 } from 'uuid';
import type { User } from 'types';

const user: User = {
  id: uuidv4(),
  name: 'User',
  points: 10012,
};

console.log(user);
