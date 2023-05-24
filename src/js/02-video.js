import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
setCurrentTime()

function onPlay ({ seconds }) {
    localStorage.setItem(currentTime, seconds)
}

function setCurrentTime(){
    if(!localStorage.getItem(currentTime)){
        return
    }
    player.setCurrentTime(localStorage.getItem(currentTime))
}
