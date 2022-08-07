import React from "react";
import { Express, Router } from "express";
import { Howler } from "howler";

class AudioStreamerController {
  constructor() {
    const audioOps = {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: "./public/audios/" + this.oggAffix.toString(),
        type: 'audio/ogg' // "webm" is open and free, so its good for FOSS-ing
      }]
    };
  }

  private exprRouter = Router();
  private oggAffix = new RegExp(/^(\w{1,8}[?: \-_?][\w+]{1,24}).ogg$/);
};