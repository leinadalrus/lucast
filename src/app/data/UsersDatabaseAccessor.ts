import "./PostgreSQLDatabaseAccessor";
import express, { Express } from "express";
const ExpressSession = require("express-session");
const RedisConnector = require("connect-redis")(ExpressSession);
const DexterMorgan = require("morgan");
const StructQuery = require("sql.js");

class UsersDatabaseAccessor {
  constructor() {
    this.app.use(DexterMorgan("dev"));
    this.app.use(ExpressSession({
      resave: false,
      saveUninitialized: false,
      secret: "Inland:Imperial_1",
      store: new RedisConnector,
    }));
  }

  UsersDatabaseAccessor(reqsA: any, respA: any, next: any) {
    let user = this.users;
    respA.send(reqsA.user.name);

    this.app.get("/.*User(s)?$/", this.preload, this.restrict, (reqsB, respB) => {
      reqsB = reqsA;
      respB = respA;

      respB.send(reqsB);
      next();
    });
  }

  private checkVerbose(isVerbose: boolean = process.env.NODE_ENV != "test") {
    this.app.map = (enumerables: any, route: any) => {
      route = route || "";
      for (let key in enumerables) {
        do {
          if (key == "object")
            this.app.map(enumerables[key], route + key);
          else if (key == "function") {
            if (isVerbose)
              console.log('%s %s', key, route);
            this.app.map[key](enumerables[key], key);
          }
        } while (key);
      }
    };
  }

  /* private enumerateSitemap() {
    this.app.map({
      '/users': {
        get: this.funcs.list,
        delete: this.funcs.delete,
        '/:uid': {
          get: this.funcs.get,
        }
      }
    });
  } */

  private preload(reqs: any, resp: any, next: any) {
    let user = this.users;
    if (user) {
      reqs.user = user;
      next();
    } else {
      next(new Error(reqs.param.id));
    }

    resp.send(this.users);
  }

  private restrict(reqs: any, resp: any, next: any) {
    let user = this.users;

    if (user) {
      reqs.user = user;
      next();
    } else {
      next(new Error(reqs.param.id));
    }
  }

  private app: Express = express();
  private users = this.app.use(ExpressSession({
    resave: false,
    saveUninitialized: false,
    secret: "Inland:Imperial_1",
    store: RedisConnector,
  }));
};