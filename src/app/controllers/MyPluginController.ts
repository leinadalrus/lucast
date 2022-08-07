import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

namespace Controllers {
  namespace Video {

    export class MyPluginController {
      constructor() {
        const { options } = videojs;
        const videoPlayer = videojs('videoElement', options, () => {
          videojs.log('onPlayerReady', this);
        });
      }

      dispose() {
        // Dispose the Video.js player when the functional component unmounts
        React.useEffect(() => {
          return () => {
            if (this.videoPlayer) {
              this.videoPlayer = null!;
            }
          };
        }, [videojs]);
      }

      private playerRef = React.useRef(null);
      private videoPlayer = this.playerRef.current;
    }

  } // namespace Video
} // namespace Controllers