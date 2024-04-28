import React from 'react';
import BoatVideo from './BoatVideo';
import HeroText from './HeroText';

function Home(props) {
  return (
    <>
      <HeroText flag={props.flag}/>
      <BoatVideo />
    </>
  );
}

export default Home;
