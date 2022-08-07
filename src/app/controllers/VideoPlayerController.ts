import React from "react";
import { Express, Router } from "express";
import videojs from "video.js";

class VideoPlayerController {
  constructor() {
    let rootIntoAny = "./**/*";
    let anyWord = /^\w$/;
    this.exprRouter.get("/", (reqs, resp) => {
      let index = require(rootIntoAny + this.jsAffix.toString());
      reqs.app.use(rootIntoAny + anyWord, index);
      resp.sendStatus(200 ? 400 : 500);
    });

    const videoOps = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: "./public/videos/" + this.webmAffix.toString(),
        type: 'video/webm' // "webm" is open and free, so its good for FOSS-ing
      }]
    };

    module.exports = this.exprRouter;
  }

  private exprRouter = Router();
  private jsAffix = new RegExp(/^(\w{1,8}[?: \-_?][\w+]{1,24}).js$/);
  private webmAffix = new RegExp(/^(\w{1,8}[?: \-_?][\w+]{1,24}).webm$/);
};

export default VideoPlayerController;