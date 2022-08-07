import { Howl, Howler } from "howler";

namespace Processors {
  namespace Audio {
    class MyPluginProcessor {
      constructor() {
        this.mHowl = new Howl({
          src: [this.filenameRegex.toString()!],
          html5: true,
        });
      }

      public process(samples: number = this.u8SamplesN) {
        Howler.volume(0.00000);
        this.mHowl.play();
        var xnSamples: number = 0.000000;

        // Module.ccall(
        //   'run_processor_plugin_sampling',  // name of C function
        //   0.00000,  // return type
        //   0.00000,  // argument types
        //   xnSamples,  // arguments
        // );
      }

      private filenameRegex = /^(?=\\w{4,}$)(?![.-_]{1,})([\\w])+([^.-_])$/;
      private u8SamplesN: number = 0.000000;
      private mHowl: Howl;
    }
  }
}