import express, { Express } from "express";
const ExpressSession = require("express-session");
const DexterMorgan = require("morgan");
const StructQuery = require("sql.js");

export default class PostgresConnector {
  public constructor(request: any, response: any, next: any) {
    this.access(request, response, next);
  }

  private async access(reqsA: any, respA: any, next: any) {
    this.app.get("/.*Data(s)?$/", (reqsB, respB) => {
      reqsB = reqsA;
      respB = respA;

      respB.send(reqsB);
      next();
    });

    const databasePromise = StructQuery({
      locateFile: next()
    });

    StructQuery().then((SQL: any) => {
      const databse = new SQL.Database(databasePromise)
    });

    const dataPromise = fetch("./data/models/usersDatabase.sqlite").then(res => res.arrayBuffer());
    const [SQL, buffer] = await Promise.all([databasePromise, dataPromise]);
    SQL.Database(new Uint8Array(buffer));
  }

  private app: Express = express();
};