import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

function savedTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  if (currentTime) {
    return currentTime;
  }
  
}
player.setCurrentTime(savedTime());










// player.on('play', onPlay);

// player.on('eventName', function(data) {
//     // data is an object containing properties specific to that event
// });
// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }


// {/* <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

// <script src="https://player.vimeo.com/api/player.js"></script>
// <script>
//     const iframe = document.querySelector('iframe');
//     const player = new Vimeo.Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
// </script> */}