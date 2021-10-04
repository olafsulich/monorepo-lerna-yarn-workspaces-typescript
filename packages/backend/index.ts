import express from 'express';
import type { User } from 'types';
import { v4 as uuidv4 } from 'uuid';

const app = express();

const user: User = {
  id: uuidv4(),
  name: 'User',
  points: 10012,
};

app.get('/', (req, res) => res.send('Monorepo Backend'));
app.listen(8000);
