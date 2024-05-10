import classes from './GenerateSCH.module.css';


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

const Table = ((chosen_sections,containerRef)=>{
  containerRef.current.innerHTML = '';
  const table = document.createElement('table');
  table.classList.add(classes.scheduleTable); // Add a class for styling
  const headerLabels = ['Course Label', 'Sec', 'Instructor', 'Days', 'Time','Number Of Students', 'Room Number'];
  const headerRow = document.createElement('tr');

  headerLabels.forEach(labelText => {
    const th = document.createElement('th');
    th.textContent = labelText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

    // Populate the table with course data
    chosen_sections.forEach(course => {
      const row = document.createElement('tr');
      const courseData = [
        course.course_label,
        course.section,
        course.instructor,
        course.days,
        course.time_display,
        course.numOfStudents,
        course.place || '', // Use room number if available, otherwise an empty string
      ];
  
      courseData.forEach(data => {
        const cell = document.createElement('td');
        cell.textContent = data;
        row.appendChild(cell);
      });
  
      table.appendChild(row);
    });
    containerRef.current.appendChild(table);
});


function generateSchedule(decIn, pointer, refs) {

  clear(refs);
  const isEmpty = Object.keys(decIn).length === 0;
  if (!isEmpty) {
    let selectedCourses = []; // Initialize as an empty array
    let counter = 0;
    for (const key in decIn) {
      if (decIn.hasOwnProperty(key)) {
        if (counter === pointer) {
          selectedCourses = decIn[key].obj; // Assign selected courses
          break;
        }
        counter++;
      }
    }
    Table(selectedCourses,refs["table"]);
    selectedCourses.forEach(course => {
      // Calculate width and position
      if (course.time_display !== "N/A" && course.days !== "N/A") {
        const [startTime, endTime] = course.time_display.split('-');
        const [startHour, startMinute] = startTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);

        const width = ((endHour * 60 + endMinute) - (startHour * 60 + startMinute)) * 0.1288;
        const startTimeLeft = (((((startHour * 60) + startMinute) - 840) * 1.4) + 672) * 0.092;

        // Create and style div elements for each day
        for (const day of course.days.split(',')) {
          const containerRef = refs[`schedule-day-${day}`]; // Access the ref by key
          if (containerRef && containerRef.current) {
            const div = document.createElement('div');
            div.className = classes.meeting;
            div.style.width = width + '%';
            div.style.left = startTimeLeft + '%';
            div.textContent = course.course_label;

            // Append the div to the appropriate day container
            containerRef.current.appendChild(div);
          } 
          // else {
          //   // console.log(`Day container ref not found: schedule-day-${day}`);
          // }
        }
      }
    });
  }
}

export default generateSchedule;