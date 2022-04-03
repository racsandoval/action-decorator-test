import 'reflect-metadata';
import path from 'path';
import express from 'express';
import { getActionMethod } from './actions/metadata-storage';
import { configActions } from './actions/config';

configActions([path.join(__dirname, '.') + '/actions/**/*.action.{ts,js}'])

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  console.log(req.body);
  const method = getActionMethod(req.body.action);
  console.log(method);
  res.status(200).send();
});

app.listen(3000, () => {
  console.log('server up');
})