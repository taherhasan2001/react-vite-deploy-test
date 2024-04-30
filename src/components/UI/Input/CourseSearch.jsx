import React, { useState, useEffect } from 'react';
import { TextField ,Autocomplete} from '@mui/material';

import SearchForCourse from '../../../Real/SearchForCourse';
import getAllCoursesNames from '../../../Real/CourseNames';

const CourseSearch = (props) => {
    const [AllCourcesNames, setAllCourcesNames] = useState([]);
    const [foundCourses, setFoundCourses] = useState([]);
    const [foundSubCourses, setFoundSubCourses] = useState([]);
    const [inputValue,setInputValue] = useState(null);
    useEffect(() => { // get all courses names
        const fetchCourses = async () => {
            const courses = await getAllCoursesNames();
            setAllCourcesNames(courses);
        };

        fetchCourses();
    }, []);



    useEffect(() => {
        // console.log("foundCourses", foundCourses);
        if(foundCourses.length){
            props.onCourseChange(foundCourses);
            // console.log("im here " + foundCourses)
        }
    }, [foundCourses]);


    
    const handleInputChange = async (event, newInputValue) => {
        if (newInputValue) {
            const [foundNewCourses, foundNewSubCourses] = await SearchForCourse(newInputValue);
            setFoundCourses(foundNewCourses);
            setFoundSubCourses(foundNewSubCourses);

            const indexToRemove = AllCourcesNames.indexOf(newInputValue);
            if (indexToRemove !== -1) {
                const updatedCourcesNames = [...AllCourcesNames];
                updatedCourcesNames.splice(indexToRemove, 1);
                setAllCourcesNames(updatedCourcesNames);
            }
            // console.log(newInputValue);
            setInputValue(inputValue === null ? '' : null);

        }
    };
    return (
        <Autocomplete
            className={props.className}
            disablePortal
            id="combo-box"
            options={AllCourcesNames} 
            onChange={handleInputChange}
            value={inputValue}

            renderInput={(params) => <TextField {...params} label="Select Courses " />}
        />
        );
}

export default CourseSearch;
