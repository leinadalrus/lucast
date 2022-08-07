import next from "next";
import { Express } from "express";
import Keycloak from "keycloak-js";
import LoginModel from "../models/LoginModel";

class LoginService extends LoginModel {
  constructor(props: any) {
    super(props);
  }

  private get validateUser() {
    // route this.username && this.password to interface with database
    return this.email === this.nameOfUser ? false : 0;
  }

  private set updateUser(username: String) {
    this.nameUsername(username);
  }

  private get validatePass() {
    // then check with implicit expressions
    return this.passcode === this.passwordOfUser ? false : 0;
  }

  private set updatePass(password: String) {
    this.writePassword(password);
  }

  private email: String = new String();
  private passcode: String = new String();
};

export default LoginService;