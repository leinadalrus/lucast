export namespace Context {
  namespace Audio {
    namespace WebWorker {
      class AudioContextWorker {
        constructor() {}

        public collectTasks(): string {
          return "CollectTasks";
        }

        public startTask() {
          return "StartTask";
        }
      
        public runTask() {
          const query = document.querySelectorAll(this.audioContextRegex.toString());
          this.onChange(query);
          return "RunTask";
        }
      
        public stopTask() {
          this.onDestroy();
          return "StopTask";
        }

        private onChange(query: NodeListOf<Element>) {
          addEventListener("scheduled", () => {
            if (this.myWorker.onmessage == this.audioContextRegex.toString)
              this.myWorker.postMessage(query.values);
          });
        }

        private onDestroy() {
          removeEventListener("scheduled", () => {}); // TODO(Task:=Tear|>Shut)
        }

        private myWorker = new Worker("audio_context_worker.js");
        private audioContextRegex = new RegExp(
            /^([?:_?][a-zA-Z0-9]{4,}[?:_?|>?: ?]{1,})([A-Za-z]{16,})$/);
      };
    }
  }
}

