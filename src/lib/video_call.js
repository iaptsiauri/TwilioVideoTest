import * as Video from 'twilio-video'

export class VideoCall {
  previewTracks = null;
  constructor() {
    this.connect();
  }

  connect() {
    const token = 'TOKEN';
    const roomName = 'ROOM_NAME';
    const iceServers = [  ];
    Video.connect(token, {name: roomName, iceServers})
    .then((room) => {
      this.attachLocalMedia();
    }).catch((e) => {
      console.log(e);
    });
  }

  attachLocalMedia() {
    const localTracksPromise = this.previewTracks
        ? Promise.resolve(this.previewTracks)
        : Video.createLocalTracks();

    localTracksPromise.then((tracks) =>{
      this.previewTracks = tracks;
      const previewContainer = document.getElementById('local-media');
      this.attachTracks(tracks, previewContainer);
    }, function(error) {
      console.error('Unable to access local media', error);
      log('Unable to access Camera and Microphone');
    });
  }

  attachTracks(tracks, container) {
    tracks.forEach(function(track) {
      container.appendChild(track.attach());
    });
  }

}
