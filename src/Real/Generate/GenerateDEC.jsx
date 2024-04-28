function generate_dec(dec, courses, index = 0, current_combination = []) {
    /*
        in this function we generate all possible combinations of sections
        we dont make new dec here we just add the valid ones to the dec
        by searching on courses array and get the sections from it
        and check if they are valid or not and add them to the dec

        ** important Note: we dont make new dec{} here we just add the valid ones to the dec
        
    */
    if (index === courses.length) { // courses , dec
      const chosenSections = [];
      const Array_instructors = []
      for (let sec = 0; sec < current_combination.length; sec++) {
        chosenSections.push(courses[sec][current_combination[sec]]);
      }
      const numberOfDays = [];
      for (let i = 0; i < chosenSections.length; i++) { // get the number of days
        for (const day of chosenSections[i].days.split(",")) {
          if (!numberOfDays.includes(day)) {
            numberOfDays.push(day);
          }
        }
        
        for (let j = i + 1; j < chosenSections.length; j++) { 
          if (chosenSections[i].collision(chosenSections[j])) {
            return;
          }
        }
      }
      let startTime = null;
      let endTime = null;
      let full = false; // 
      for (const section of chosenSections) {
        const numOfStudents= section.numOfStudents.split("/");
        if ( parseInt(numOfStudents[0], 10) >= parseInt(numOfStudents[1], 10) ) {
          full = true;
         
        }
        if (startTime === null || parseFloat(section.time_start().replace(":", ".")) < parseFloat(startTime.replace(":", "."))) {
          startTime = section.time_start();
        }
        if (endTime === null || parseFloat(section.time_end().replace(":", ".")) > parseFloat(endTime.replace(":", "."))) {
          endTime = section.time_end();
        }
        if (!Array_instructors.includes(section.instructor)){
          Array_instructors.push(section.instructor);
        }
      }
      const chosenSectionsTuple = chosenSections;
      if (endTime != null && startTime != null && !dec[chosenSectionsTuple]){
        dec[chosenSectionsTuple] = {
            full, 
            numberOfDays,
            startTime,
            endTime,
            instructors: Array_instructors,
            totalTime: `${parseFloat(endTime.replace(":", ".")) - parseFloat(startTime.replace(":", "."))}`,
            obj : chosenSections

        };
    }
      return;
    }
  
    const max_number = courses[index].length - 1;
    for (let i = 0; i <= max_number; i++) {
      current_combination.push(i);
      generate_dec(dec, courses, index + 1, current_combination);
      current_combination.pop();
    }
}
export default generate_dec;
