import React,{useState,Fragment} from 'react';
import Home from "./Intro/Home";
import Navbar from "./Intro/Navbar";
import MainProj from './MainProj';
import classes from './App.module.css';

function App() {
  const [nextStage, setNextStage] = useState(false);
  const [changed , setChanged] = useState(false);
  const [letNavbar , setremoveNavbar] = useState(true);

  // const handleNavbar = (flag) =>{
  //   setremoveNavbar(flag);
  // }

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
      {letNavbar && <Navbar  handleClick={handleChangeStage} flag={!changed} text={nextStage?"go back":"let's start"}/>}

      {!nextStage && <Home flag={!changed} />}
      
      {
        nextStage &&  
        <div className={classes.dev}>
          <MainProj  setremoveNavbar={setremoveNavbar}/> 
        </div>
      } 
    </Fragment>
  );
}

export default App;
