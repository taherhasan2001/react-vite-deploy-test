import React from 'react';
import BoatVideo from './BoatVideo';
import HeroText from './HeroText';
import ChoiceComponent from '../ChoiseHome/ChoiceComponent';
import Testimonials from '../ChoiseHome/Testimonials'; Gallery
import Gallery from '../ChoiseHome/Gallery'; 

function Home(props) {
  return (
    <>
      <HeroText flag={props.flag}/>
      <BoatVideo />
      <Gallery/>
    </>
  );
}

export default Home;
