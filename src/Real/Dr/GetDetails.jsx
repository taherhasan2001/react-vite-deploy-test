// get details from selected cources
// return obj
// key = Course name
// value = [DrNames]



const GetDetails = (props) => {
    const details = {};
    const ArrayOfCourcesNames = [];
    const {MulSections} = props;
    MulSections.forEach(sections => {
        const course_label = sections[0].course_label;
        if (!ArrayOfCourcesNames.includes(course_label)) {
            ArrayOfCourcesNames.push(course_label);
        }
        details[course_label]=[]
        sections.forEach(sec => {
            const instructor = sec.instructor;
            if (!details[course_label].includes(instructor)) {
                details[course_label].push(instructor);
            }
        });
    });
    return [details,ArrayOfCourcesNames];    
}

export default GetDetails;
