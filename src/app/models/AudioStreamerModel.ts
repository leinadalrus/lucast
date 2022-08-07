import React from "react";
import { Howl, Howler } from "howler";

class AudioStreamerModel {
  constructor() {
    let howl = new Howl({
      src: [this.userID.toString() +
        this.audioID.toString() +
        this.oggAffix.toString()],
      html5: true,
      volume: 0.5,
      autoplay: true
    });

    howl.once('load', () => {
      howl.mute();
      howl.play();
    });

    howl.on('end', () => {
      howl.stop();
      howl.unload();
    });
  }
  private userID = new RegExp(/^(\w{1,8}[\d+]{1,8}[?: \-_?])$/);
  private audioID = new RegExp(/^(\w{1,8}[\d+]{1,8}[?: \-_?])$/);
  private oggAffix = new RegExp(/^(\w{1,8}).ogg$/);
};


export default AudioStreamerModel;