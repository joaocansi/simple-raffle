import express from 'express';
import cors from 'cors';

import ServerError from './error/ServerErrorCommander';

import 'reflect-metadata';
import './database/connection';
import routes from './routes/index.route';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(ServerError);
app.listen(3333);