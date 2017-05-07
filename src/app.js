import {VideoCall} from 'lib/video_call'

export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  attached() {
    this.videoCall = new VideoCall();
  }
}
