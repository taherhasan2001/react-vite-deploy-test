import React,{useState,Fragment, useEffect} from 'react';
import Home from "./Intro/Home";
import Navbar from "./Intro/Navbar";
import MainProj from './MainProj';
import classes from './App.module.css';
import TextAnimation from './Real/MovieStart/TextAnimation';

function App() {
  const [stageLevel, setStageLevel] = useState(-1);
  const [changed , setChanged] = useState(false);

  useEffect(() => {
    // Check if flag exists in localStorage
    const flag = localStorage.getItem('skip');

    if (flag !== null) {
      // If flag exists, set stageLevel to 1
      if (flag == "false"){//flag = false
        localStorage.setItem('skip', true);
      }
      else{// flag = "true"
        setChanged(true);
        localStorage.setItem('skip', false);
      }
    } else {
      // If flag does not exist, set flag to true
      localStorage.setItem('skip', false);
    }
  }, []); 


  const handleChangeStage = () => {
    if(stageLevel ==-1){
      setStageLevel(0);

    }
    else if(stageLevel ==0){
      setStageLevel(1);
      setChanged(true);

    }
    else if (stageLevel ==1){
      setStageLevel(0);
    }
    else{

      setStageLevel(1);


    }
  };


  


  return (
    <Fragment >

  {stageLevel==-1 && <TextAnimation changeBackGNDtoWhite={changed} handleChangeStage={handleChangeStage}/>}

      { stageLevel!=-1 && <Navbar  handleClick={handleChangeStage} flag={!changed} text={stageLevel?"go back":"let's start"}/>} 

      {stageLevel==0 && <Home flag={!changed} />}

      {
        stageLevel>0 &&  
        <div className={classes.dev }>
          <MainProj   stageLevel={stageLevel}  setStageLevel={setStageLevel}/> 
        </div>
      } 
    </Fragment>

  );
}

export default App;
