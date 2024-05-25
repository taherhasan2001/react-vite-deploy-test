import {React, useState, useEffect} from 'react';
import SelectCourse from './SelectCourse';
import CustomClearIndicator from './removeDr';
import classes from './MainComponantDrDetails.module.css'
const MainComponantDrDetails = (props) => {
    const {details, ArrayOfCourcesNames,selectedOptionsString, setSelectedOptionsString} = props;

    const [courseSelected, setCourseSelected] = useState(null);
    const [DrsNamesToSend, setDrsNamesToSend] = useState(null);
    const [DrsObjToSend, setDrsObjToSend] = useState([]);

    useEffect(() => {

        // Initialize DrsNamesToSend based on the initial courseSelected value
        if (courseSelected !== null) {
            // console.log(details[courseSelected])
            setDrsNamesToSend(details[courseSelected]);
        }
        else
            setDrsNamesToSend(details[Object.keys(details)[0]]);

    }, [details, ArrayOfCourcesNames, courseSelected]);

    useEffect(() => {
        // Update DrsObjToSend when DrsNamesToSend changes
        if (DrsNamesToSend) {
            setDrsObjToSend(prevState => [
                ...DrsNamesToSend.map((Dr, index) => ({
                    value: (prevState.length + index + 1).toString(),
                    label: Dr,
                    color: '#00B8D9'
                }))
            ]);
        }
    }, [DrsNamesToSend]);

    return (
        <div className={classes.container}>
            <fieldset>
                <legend>Remove the Dr.</legend>
            </fieldset>

            <SelectCourse
                colourOptions={ArrayOfCourcesNames.map((courseName, index) => ({
                    value: index.toString(),
                    label: courseName,
                    color: '#00B8D9'
                }))}
                setCourseSelected={setCourseSelected}
                courseSelected={courseSelected}
            />
            <CustomClearIndicator
                colourOptions={DrsObjToSend}
                setSelectedOptionsString={setSelectedOptionsString}
                selectedOptionsString={selectedOptionsString}
            />
        </div>
    );
};

export default MainComponantDrDetails;
