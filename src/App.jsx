import React,{useState,Fragment} from 'react';
import Home from "./Intro/Home";
import Navbar from "./Intro/Navbar";
import MainProj from './MainProj';
function App() {
  const [nextStage, setNextStage] = useState(false);
  const [changed , setChanged] = useState(false);
  const handleChangeStage = () => {
    if(!nextStage){
      setNextStage(true);
      setChanged(true);
    }
    else
      setNextStage(false);
  };
  
  return (
    <Fragment>
      <Navbar handleClick={handleChangeStage} flag={!changed} text={nextStage?"go back":"let's start"}/>
      {!nextStage && <Home flag={!changed} />}
      {nextStage &&<div style={{ marginTop: '150px' }}>
         <MainProj  />
      </div>}
    </Fragment>
  );
}

export default App;
