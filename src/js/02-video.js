import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new vimeo('iframe');
const LOCALSTORAGE_KEY = "videoplayer-current-time";


    player.on('play', function() {
        console.log('played the video!');
    });
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

  
const onPlay = function(e) {
 const savedTime = e.seconds;
 saveInLocalStorage(LOCALSTORAGE_KEY, savedTime);
 };


const saveInLocalStorage = (key, value) => {
  try {
    const dataInLocalStorage = JSON.stringify(value);
    localStorage.setItem(key, dataInLocalStorage);
  } catch (error) {
    console.error("Return error: ", error.message);
  }
};


player.on('timeupdate', _.throttle(onPlay, 1000));


const loadFromLocaleStorage = key => {
  try {
    const dataInLocalStorage = localStorage.getItem(key);
    return dataInLocalStorage === null ? undefined : JSON.parse(dataInLocalStorage);
  } catch (error) {
    console.error("Return errorr: ", error.message);
  }
};


export default {
  saveInLocalStorage,
  loadFromLocaleStorage,
};


const savedTime = loadFromLocaleStorage(LOCALSTORAGE_KEY);

player.setCurrentTime(savedTime).then(function (seconds) { }).catch(function (error) { });
