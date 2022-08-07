import React from 'react';
import videojs from 'video.js';

class VideoPlayerModel {
  constructor() {
    const VideoJS = (props: any) => {
      const videoReference = React.useRef(typeof Option);
      const playerReference = React.useRef(typeof Option);
      const { options, onReady } = props;

      React.useEffect(() => {
        const videoElement = videoReference.current;
        var player = videojs(videoElement);

        if (!playerReference.current) {
          if (!videoElement) return null!;

          // const player = playerReference.current; // this will not work-
          // -due to typeof Options and constant-declaration.
          var player = videojs(videoElement,
            options, () => {
              videojs.log("VIDEO PLAYER FUNCTION: ON_READY");
              onReady && onReady(player);
            });
        } else {
          player.autoplay(options.autoplay);
          player.src(options.sources);
        }
      }, [options, videoReference]);

      React.useEffect(() => {
        return () => {
          if (playerReference.current) {
            playerReference.current = null!;
          }
        };
      }, [playerReference]);

      React.createElement(
        "div data-vjs-player",
        {
          videoReference,
          className: "video-js vjs-big-play-centered"
        }
      );
    };

    this.videoJSModel = VideoJS
  }

  private videoJSModel: any = 0;
};

export default VideoPlayerModel;

/**
 * @classdesc
 * 
 * NOTE(Video Player): transform VideoPlayerModel into a component that can be
 * swapped between VideoJS and HowlerJS
 * 
*/

