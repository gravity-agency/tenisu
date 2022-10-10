import express from 'express';
import path from 'path';
import logger from 'morgan';

import playersRouter from './routes/players';
import statsRouter from './routes/stats';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routerSetup();
  }

  private config() {
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  private routerSetup() {
    this.app.use('/players', playersRouter);
    this.app.use('/stats', statsRouter);
  }
}

export default new App().app;
