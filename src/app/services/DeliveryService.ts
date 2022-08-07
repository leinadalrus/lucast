
import path from "path";
import express, { Express } from "express";
const DexterMorgan = require("morgan");

class DeliveryService {
  constructor() {
    this.app.use(express.static(
      path.join("./.*App(s)?$/", "public/resources")));

    this.app.use('/static', express.static(
      path.join("./.*App(s)?$/", 'public/resources')));
  }

  DeliveryService() {
    this.app.use(this.mLogger);
  }

  private app: Express = express();
  private mLogger = DexterMorgan("dev");
};