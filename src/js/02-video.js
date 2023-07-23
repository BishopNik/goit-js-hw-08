import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const playerVimeo = new Player(iframe);

const getTimeThrottle = throttle(getTime, 1000);

const timePlayed = localStorage.getItem('videoplayer-current-time');
if (timePlayed) {
  playerVimeo.setCurrentTime(timePlayed).catch(errorFn);
}

playerVimeo.on('timeupdate', getTimeThrottle);

function getTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

function errorFn({ name, message }) {
  switch (name) {
    case 'RangeError':
      console.log('Incorrect time, ', message);
      break;

    default:
      console.log('Error:', message);
      break;
  }
}
