import next from "next";
import React from "react";
import { Express } from "express";
import Keycloak from "keycloak-js";

class LoginModel extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public get nameOfUser() {
    return this.username;
  }

  public set nameUsername(username: any) {
    this.username = username;
  }

  public get passwordOfUser() {
    return this.password;
  }

  public set writePassword(password: any) {
    this.password = password;
  }

  private username: String = new String();
  private password: String = new String();
};

export default LoginModel;