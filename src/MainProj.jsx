import React, { useState, useEffect ,Fragment} from 'react';
import Controller from './components/UI/Controller/Controller';
import Schedule from './components/UI/Schedule/Schedule';
import CourseSearch from './components/UI/Input/CourseSearch';
import classes from './MainProj.module.css';
import FeedBack from './components/UI/FeedBack/FeedBack';
import UserList from './Real/UserSelectCources/UserList';
import generate_dec from './Real/Generate/GenerateDEC';
import generateSchedule from './Real/Generate/GenerateSCH';
import Pagination from './Real/Pagination/Pagination';
import ButtonGen from './components/UI/Button/ButtonGEN';
import RotatePhone from './Real/Generate/RotatePhone'
import Settings from './Real/UserSelectCources/SettingsUP';
import * as settingsFunc from './Real/settings';
import MainComponantDrDetails  from './Real/Dr/MainComponantDrDetails';
import GetDetails from './Real/Dr/GetDetails';
import ErrorModal from './teachUser/ErrorModule';

function MainProj(props) {
  const clear = ((refs)=>{
    const Alldays = ['S','N','M','T','W','R','F'];
    for (const day of Alldays) {
      const containerRef = refs[`schedule-day-${day}`]; // Access the ref by key
      if (containerRef && containerRef.current) {
        // Clear existing children
        containerRef.current.innerHTML = '';
    
      }
    }
    if(refs['table'])
    refs['table'].current.innerHTML = '';

  });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [dec, setDec] = useState({}); // State to hold dec object
  const [decWithOutSettings,setDecWithOutSettings] = useState({})
  const [scheduleRefs, setScheduleRefs] = useState({});
  const [pointer, setPointer] = useState(0);
  const [details,setDetails]=useState(null);
  const [ArrayOfCourcesNames,setArrayOfCourcesNames]=useState(null);
  const [selectedOptionsString, setSelectedOptionsString] = useState([]); // MainComponent

  //   useEffect(()=>{
  //     console.log(selectedOptionsString);
  // },[selectedOptionsString])// MainComponent

  useEffect(() => {
    if(props.stageLevel==1 && selectedCourses.length!=0){
      handleBackBTN(selectedCourses);
    }
  }, [props.stageLevel]);

  const handleCourseChange = (courses) => {
    setSelectedCourses([...selectedCourses, courses]); // Create a new array with the updated courses
  };
  const handleBackBTN = (selectedCourses) => {
    const updatedDec = { ...dec }; // Create a copy of the dec state
    generate_dec(updatedDec, selectedCourses); // Call generate_dec with the updated dec
    setDec(updatedDec); // Update the dec state with the new values
    setDecWithOutSettings(updatedDec);
    // generateSchedule(updatedDec, pointer, scheduleRefs);
    clear(scheduleRefs);
  };
  const handleNextBtn = () => {
    setPointer((pointer + Object.keys(dec).length +1) %  Object.keys(dec).length);
  };

  const handlePrevBtn = () => {
    setPointer((pointer + Object.keys(dec).length -1) %  Object.keys(dec).length);
  };

  const handleButtonClick = (title) => {
    // Implement the logic to remove the button
    setSelectedCourses(selectedCourses.filter(course => course[0].course_label !== title));
  };

  const handleGenerateBTN = () => {
    setPointer(0);
    if (selectedCourses.length > 0){
      const updatedDec = {  }; 
      generate_dec(updatedDec, selectedCourses); 
      setDec(updatedDec); 
      setDecWithOutSettings(updatedDec);
      props.setStageLevel(2);
      generateSchedule(updatedDec,pointer,scheduleRefs);
  
    }
    
  };
  const handleRefs = (refs) => {
    setScheduleRefs(refs);
  };

  useEffect(() => {
    generateSchedule(dec,pointer,scheduleRefs);
  }, [pointer]);

  const [settings, setsettings] = useState({
    'Sat':false,
    'Mon':false,
    'Tue':false,
    'Wed':false,
    'Thurs':false,
    "Reduce Days":false,
    "Reduce Time":false,
    "Remove Full Sections":false,
    "Reduce End Time":false
  });
  const handleCheckboxChange = (dayElement) => {
    const value=dayElement.current.value

    setsettings(prevSettings => ({
      ...prevSettings,
      [value]: !prevSettings[value] // Toggle the value of the clicked day
    }));
  };

  useEffect(() => {

    let new_dec=decWithOutSettings;
    Object.entries(settings).forEach(([value, state]) => {
      if(state){
        if(value=="Sat")
          new_dec = settingsFunc.reduceSaturday(new_dec);
        else if(value=="Mon")
          new_dec = settingsFunc.reduceMonday(new_dec);
        else if(value == "Tue")
          new_dec = settingsFunc.reduceTuesday(new_dec);
        else if(value == "Wed")
          new_dec = settingsFunc.reduceWednesday(new_dec);
        else if(value == "Thurs")
          new_dec = settingsFunc.reduceThursday(new_dec);
        else if(value == "Reduce Days")
          new_dec = settingsFunc.reduceDays(new_dec);
        else if(value == "Reduce Time")
          new_dec = settingsFunc.reduceTime(new_dec);
        else if(value == "Remove Full Sections")
          new_dec = settingsFunc.FRemoveFullSections(new_dec);
        else if(value == "Reduce End Time")
          new_dec = settingsFunc.reduceEndTime(new_dec);
      }
    });
    if(selectedOptionsString && selectedOptionsString.length)
      new_dec = settingsFunc.RemoveDrsFunction(new_dec,selectedOptionsString);

    setDec(new_dec);
    // generate_dec({}, selectedCourses); 
    generateSchedule(new_dec,pointer,scheduleRefs);
    setPointer(0);
    
    
  }, [settings,selectedOptionsString]); 

  useEffect(() => {
    const [a,b] = GetDetails({ MulSections: selectedCourses });
    setArrayOfCourcesNames(b);
    setDetails(a);
  
  
  }, [selectedCourses]);

  
  return (
    <Fragment>
      {props.stageLevel==2  && props.error && <ErrorModal
                title={' نظرة سريعة '}
                message={'يوجد ثلاثة اعادات: الأولى حذف الدكتور الثانية حذف اليوم الثالثة اعدادات متقدمة'}
                onConfirm={props.errorChildHandler}
      />}
          {props.stageLevel == 2 && <RotatePhone/>}
          {props.stageLevel == 2 && <MainComponantDrDetails selectedOptionsString={selectedOptionsString} setSelectedOptionsString={setSelectedOptionsString} details={details} ArrayOfCourcesNames={ArrayOfCourcesNames}/>}
                 
          {props.stageLevel == 2 &&<Settings onChange={handleCheckboxChange}/>}

          {props.stageLevel==1 &&<CourseSearch
            selectedCourses={selectedCourses}
            className={classes.child}
            onCourseChange={handleCourseChange}
          />}

          {props.stageLevel==1 && <UserList onClick={handleButtonClick} courses={selectedCourses} />}

          {props.stageLevel==1 &&selectedCourses.length!=0 && <div className={classes.container}>
            <ButtonGen text="Generate" type="submit" className={classes.btn} onClick={handleGenerateBTN}/>
          </div>}
          

          <Schedule onRefs={handleRefs}  />

          {props.stageLevel==2 && (
            <Fragment>
              <Controller
                  name={{  first: "pre",second:'next' }}
                  onClick={{ first: handlePrevBtn , second:handleNextBtn}}
                />
            {Object.keys(dec).length != 0 && <Pagination >{`${pointer+1}/${Object.keys(dec).length}`}</Pagination>}

            </Fragment>
          )}
          
          <FeedBack />

    </Fragment>
  );
}


export default MainProj;