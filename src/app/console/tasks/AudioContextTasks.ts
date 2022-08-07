export namespace Context {
  namespace Audio {
    namespace Tasks {
      enum SchedulerWorkerTasks { 
        PendingState, Scheduled, Completed, Running, Failed 
      };

      class ScheduleWorkTasker {
        constructor(uuid: number, name: string) {
          let userID = new RegExp(/^(\w{1,8}[\d+]{1,8}[?: \-_?])$/);
          this.UUID = uuid;
          if (userID.exec(name) != null!) {
            this.name = name;
          }
        }

        public renderable(media: string) {
          let contentID = new RegExp(/^(\w{1,8}[\d+]{1,8}[?: \-_?])$/);
          if (contentID.exec(media) != null!) {
            this.media = media;
          }
        }

        public partition(memory: number, disk: number) {
          this.memory = memory;
          this.disk = disk;
        }

        public pair(port: number) {
          this.exposedIDs = port;
          this.pairs = new Map;
          this.pairs.set(this.UUID.toString(), this.media);
        }

        public police(policy: string, state: number) {
          this.restartPolicy = policy;
          this.state = state;
        }

        public lifetime() {
          this.startTime = 0;
          this.finishTime = 0; // fps end-frame TTSK (Time-to-start-kill)
        }

        private worker = new Worker(/^(?:\.\/\*\*)(\w).js$/.toString());
        private UUID: number = 0;

        private name: string = "johnDoe-0000_TMP";
        private media: string = "media-0000_RAW";

        private memory: number = 2 * 1024 * 1024;
        private disk: number = 2 * 1024 * 1024;

        private exposedIDs: number = 8080;
        private pairs: Map<String, String> = new Map;

        private startTime: number = 0;
        private finishTime: number = 0;

        private restartPolicy: string = "scheduled";
        private state: SchedulerWorkerTasks = SchedulerWorkerTasks.PendingState;
      };

      class Job {
        constructor(id: number) {
          this.jobUUID = id;
          this.taskStates = SchedulerWorkerTasks.PendingState;
          this.nanosecondsMarker = 0;
        }

        jobUUID: number = 0;
        taskStates: SchedulerWorkerTasks = SchedulerWorkerTasks.PendingState;
        nanosecondsMarker: number = 0.000000;
      };

      class AudioContextTasks {
        task: ScheduleWorkTasker = new ScheduleWorkTasker(0, "Audio Context");
        Job: Job = new Job(0);
      };
    }
  }
}