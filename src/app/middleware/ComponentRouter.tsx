import express, { Express, Router } from "express";
import Link from "next/link";
import { useRouter } from "next/router";
import App from "../App";

class ComponentRouter extends App {
  constructor() {
    super();
  }

  routeControl() {
    return (
      (controllers: any) => {
        {
          controllers.map((c: any) => {
            <Link href={{
              pathname: '/pages/[controller]',
              query: { controller: c.controller },
            }}>
            </Link>
          })
        }
      }
    )
  }

  routeAction() {
    return (
      (actions: any) => {
        {
          actions.map((a: any) => {
            <Link href={{
              pathname: this.routeControl+'/[action]',
              query: { action: a.action },
            }}>
            </Link>
          })
        }
      }
    )
  }

  ids() {
    const { id } = this.nextRouter.query;
    return { id };
  }

  private nextRouter = useRouter();
};

export default ComponentRouter;

/**
 * 
 * @classdesc
 * 
 * Employ React component/modules to route and handle actions and their IDs.
 * 
 * @params request(s), response(s)
 * @return React.Component
 * 
 * 
 * 
*/