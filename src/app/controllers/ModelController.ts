import { useRouter } from "next/router";
import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class ModelController {
  constructor() {}

  public get getController() {
    const controller = this.nextRouter.query.controller as string;
    return controller;
  }

  public get getAction() {
    const action = this.nextRouter.query.action as string;
    return action;
  }

  public get getID() {
    const id  = this.nextRouter.query.id as string;
    return id;
  }

  private nextRouter = useRouter();
};

export default ModelController;