import data from './BZU.json';
import Course from './Course';

const SearchForCourse = (course_name) =>{
    const found_courses = [];
    const found_sub_courses = [];
    let flagWeGotOne = false;

    for (const course_data of data) {
        if (course_data["name of course"] === course_name ) {
            flagWeGotOne = true;
            const course = new Course(
                course_data["name of course"],
                course_data["sec"],
                course_data["name of instructor"],
                course_data["days"],
                course_data["time"],
                course_data["place"],
                course_data["number of students"]
            );
        found_courses.push(course);
        }
        else if (course_data["name of course"] === 'sub'+ course_name || course_data["name of course"] === 'lab'+ course_name){
            const course = new Course(
                course_data["name of course"],
                course_data["sec"],
                course_data["name of instructor"],
                course_data["days"],
                course_data["time"],
                course_data["place"],
                course_data["number of students"]
            );

            found_sub_courses.push(course);
        }
        
        else if (flagWeGotOne) {// SAVE TIME
            break;
        }
    }
    return [found_courses, found_sub_courses];
} 

export default SearchForCourse;