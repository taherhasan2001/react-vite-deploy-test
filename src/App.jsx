import React,{useState,Fragment, useEffect} from 'react';
import Home from "./Intro/Home";
import Navbar from "./Intro/Navbar";
import MainProj from './MainProj';
import classes from './App.module.css';
import TextAnimation from './Real/MovieStart/TextAnimation';
import ErrorModal from './teachUser/ErrorModule';
function App() {
  const [stageLevel, setStageLevel] = useState(-1);
  const [changed , setChanged] = useState(false);
  const [error , setError] = useState(true);
  const [errorChild , setErrorChild] = useState(true);

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

  const errorHandler = () =>{
    setError(false);
  }
  const errorChildHandler = () =>{
    setErrorChild(false);
  }



  return (
    <Fragment >
      
    {stageLevel>0  && error && <ErrorModal
                title={' نظرة سريعة '}
                message={'بإمكانك في هذه الصفحة إضافة المواد التي تريدها ... أضف كل المواد ثم اضغط على الزر لتوليد الجداول ... تذكر اختيار كل المواد ثم الزر'}
                onConfirm={errorHandler}
      />}

  {stageLevel==-1 && <TextAnimation changeBackGNDtoWhite={changed} handleChangeStage={handleChangeStage}/>}

      { stageLevel!=-1 && <Navbar error={ (stageLevel==1  && error) || (stageLevel==2 && errorChild)} handleClick={handleChangeStage} flag={!changed} text={stageLevel?"go back":"let's start"}/>} 

      {stageLevel==0 && <Home flag={!changed} />}

      {
        stageLevel>0 &&  
        <div className={classes.dev }>
          <MainProj error={errorChild} errorChildHandler={errorChildHandler}  stageLevel={stageLevel}  setStageLevel={setStageLevel}/> 
        </div>
      } 
    </Fragment>

  );
}

export default App;
