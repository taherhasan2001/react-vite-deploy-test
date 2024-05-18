import React from 'react';
import boatVideoSrc from './assets/boat-video.mp4';

function BoatVideo(props) {
  console.log(props.IsFirstTime)
  return (
    <video
    className={`h-100vh w-full object-cover ${props.IsFirstTime ? 'animate-clip-from-top-animation' : 'animate-clip-from-top-no-animation'}`}
    autoPlay
      muted
      loop
    >
      <source src={boatVideoSrc} type="video/mp4" />
    </video>
  );
}

export default BoatVideo;
