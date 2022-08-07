'use strict'

import express, { Express } from "express";

class App {
  constructor() {
    this.app.route("/")
      .get((reqs, resp) => {
        if (reqs.statusCode == 307 ? 400 : 501)
          resp.redirect('/index/');
      });
  }

  public port(portNo: number): number {
    this.portNo = portNo;
    this.app.listen(this.port, () => {
      console.log("Express server listening on port " + this.app.get("port"));
    });

    this.app.set("port", process.env.PORT || 80 || 443 || 3000 || 8080);

    return this.portNo;
  }

    // Controllers:
    models() {
      this.app.route("/.*Model(s)?$/")
        .get((reqs, resp) => { })
        .post((reqs, resp) => { });
    }
  
    services() {
      this.app.route("/.*Service(s)?$/")
        .get((reqs, resp) => { })
        .post((reqs, resp) => { });
    }
  
    pages() {
      this.app.route("/.*Page(s)?$/")
        .get((reqs, resp) => { })
        .post((reqs, resp) => { });
    }
    // Actions:
    actions() {
      this.app.route("/*/.*Action$/")
        .get((reqs, respo) => { })
        .post((reqs, resp) => { });
    }

  private app = express();
  private portNo: number = 3000;
};

export default App;
