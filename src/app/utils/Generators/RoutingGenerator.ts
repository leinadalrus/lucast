import { Express } from "express";

class RoutingGenerator {
  constructor() { }

  self(): any {
    return {
      controller: this.controller,
      action: this.action,
      id: this.id,
    };
  }


  public get controllerGet(): String {
    return this.controller;
  }


  public set controllerSet(str: String) {
    this.controller = str;
  }

  public get actionGet(): String {
    return this.action;
  }

  public set actionSet(str: String) {
    this.action = str;
  }

  public get idGet(): number {
    return this.id;
  }

  public set idSet(num: number) {
    this.id = num;
  }

  private controller: String = "";
  private action: String = ""
  private id: number = 0;
};