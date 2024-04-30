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
    scheduleRefs["table"].current.innerHTML = '';
  });


  const [selectedCourses, setSelectedCourses] = useState([]);
  const [stageLevel, setStageLevel] = useState(0);
  const [dec, setDec] = useState({}); // State to hold dec object
  const [scheduleRefs, setScheduleRefs] = useState({});
  const [pointer, setPointer] = useState(0);

  useEffect(() => {
    // console.log(dec);
  }, [dec]);

  const handleCourseChange = (courses) => {
    setSelectedCourses([...selectedCourses, courses]); // Create a new array with the updated courses
  };

  useEffect(() => {
    // console.log(selectedCourses.map(course => course[0].course_label).join(', '));
  }, [selectedCourses]);

  const handleNextBtn = () => {
    setPointer((pointer + Object.keys(dec).length +1) %  Object.keys(dec).length);
  };

  const handlePrevBtn = () => {
    setPointer((pointer + Object.keys(dec).length -1) %  Object.keys(dec).length);
  };

  const handleButtonClick = (title) => {
    // Implement the logic to remove the button
    // console.log(`Button with title "${title}" clicked. Implement logic to remove.`);
    setSelectedCourses(selectedCourses.filter(course => course[0].course_label !== title));
  };

  const handleGenerateBTN = () => {
    props.setremoveNavbar(false);
    setPointer(0);
    if (selectedCourses.length > 0){
      const updatedDec = {  }; 
      generate_dec(updatedDec, selectedCourses); 
      setDec(updatedDec); 
      setStageLevel(1);
      generateSchedule(updatedDec,pointer,scheduleRefs);
  
    }
    
  };
  const handleBackBTN = () => {
    props.setremoveNavbar(true);
    const updatedDec = {}; // Create a copy of the dec state
    generate_dec(updatedDec, selectedCourses); // Call generate_dec with the updated dec
    setDec(updatedDec); // Update the dec state with the new values
    setStageLevel(0);
    // generateSchedule(updatedDec,pointer,scheduleRefs);
    clear(scheduleRefs);

  };
  const handleRefs = (refs) => {
    setScheduleRefs(refs);
  };

  useEffect(() => {
    generateSchedule(dec,pointer,scheduleRefs);
  }, [pointer]);
  
  return (
    <Fragment>
          {true && (
            <Fragment>
              {stageLevel==0 &&<CourseSearch
                className={classes.child}
                onCourseChange={handleCourseChange}
              />}

              {stageLevel==0 && <UserList onClick={handleButtonClick} courses={selectedCourses} />}

              {!stageLevel &&selectedCourses.length!=0 && <div className={classes.container}>
                <ButtonGen text="Generate" type="submit" className={classes.btn} onClick={handleGenerateBTN}/>
              </div>}
            </Fragment>
          )}
          <Schedule onRefs={handleRefs}  />

          {stageLevel==1 && (
            <Fragment>
              <Controller
                  name={{ first: "back", second: "pre",third:'next' }}
                  onClick={{ first: handleBackBTN , second: handlePrevBtn , third:handleNextBtn}}
                />
            <Pagination >{`${pointer+1}/${Object.keys(dec).length}`}</Pagination>

            </Fragment>
          )}
          
          <FeedBack />

    </Fragment>
  );
}


export default MainProj;