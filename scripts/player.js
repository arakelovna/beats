
function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "392",
    width: "662",
    videoId: "Q0B72t-M4CA",
    playerVars: {
      'playsinline': 0,
      'controls': 0,
      'disablekb':0,
      'showinfo':0,
      'rel':0,
      'autoplay':0,
      'modestbranding': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });


};
 


let player;
const playerButton = $('.player__start');


let eventsInit = ()=> {
  $(".player__start").click( e=> {
    e.preventDefault();
    

    const btn = $(e.currentTarget);

    if (playerButton.hasClass('player__start--active')) {

      playerButton.removeClass('player__start--active');
      player.pauseVideo();
      

    } else {
      player.playVideo();
    }

  })

 
  


  $(".player__playback").click( e=>{
    const bar=$(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / bar.width()) *100;
    const newPlaybackPositionSec = (player.getDuration() / 100)*newButtonPositionPercent;

    $(".player__playback-button").css({
      left: `${newButtonPositionPercent}%`
    });

    player.seekTo(newPlaybackPositionSec);

  });
  $(".player__splash").click(e=> {
    player.playVideo();
  })

  //const currentVolume  = player.getVolume();

  // $(".player__sound-button").css({
  //   left: `${currentVolume}%`
  // });
  

  $(".player__sound").click( e=>{

    const volumeBar =$(e.currentTarget);
    const clickedPoint = e.originalEvent.layerX;
    const newButtonPointPercent = (clickedPoint / volumeBar.width()) *100;
    const newPlaybackPointNum = (player.getVolume() / 100)*newButtonPointPercent;

    $(".player__sound-button").css({
      left: `${newButtonPointPercent}%`
    });

    player.setVolume(newPlaybackPointNum);
  


  });

};


const onPlayerStateChange = event => {

  const playerSplash = $('.player__splash');

/*
-1 (unstarted)
0 (ended)
1 (playing)
2 (paused)
3 (buffering)
5 (video cued).
*/
  switch (event.data) {
    case 1: 
     playerSplash.addClass('player__splash--active');
     playerButton.addClass('player__start--active');
     break;

    case 2:
      playerSplash.removeClass('player__splash--active');
      playerButton.removeClass('player__start--active');
      break;

  }

}


const onPlayerReady = () => {
  let interval;
  let size;
  const durationSec = player.getDuration();

  interval  = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec/durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });

  })

  
};



eventsInit();





