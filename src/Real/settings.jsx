import { each } from "jquery";

let minTime = null;
let minStartTime = null;
let minEndTime = null;
let minDays = null;

function reduceDays(usedDec) {
    getDetails(usedDec);
    const newDec = {};
    for (const key in usedDec) {
      if (usedDec[key]['numberOfDays'].length === minDays) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function reduceMonday(usedDec){
    const newDec = {};
    for (const key in usedDec) {
      if (!usedDec[key]['numberOfDays'].includes("M")) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function reduceTuesday(usedDec){
    const newDec = {};
    for (const key in usedDec) {
      if (!usedDec[key]['numberOfDays'].includes("T")) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function reduceWednesday(usedDec){
    const newDec = {};
    for (const key in usedDec) {
      if (!usedDec[key]['numberOfDays'].includes("W")) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function reduceThursday(usedDec){
    const newDec = {};
    for (const key in usedDec) {
      if (!usedDec[key]['numberOfDays'].includes("R")) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function reduceSaturday(usedDec){
    const newDec = {};
    for (const key in usedDec) {
      if (!usedDec[key]['numberOfDays'].includes("S")) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function reduceTime(usedDec) {
  getDetails(usedDec);
    const newDec = {};
    for (const key in usedDec) {
      if (usedDec[key]['totalTime'] === minTime) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function FRemoveFullSections(usedDec) {
    const newDec = {};
    for (const key in usedDec) {
      if (usedDec[key]['full'] === false) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function reduceEndTime(usedDec) {
  getDetails(usedDec);

    const newDec = {};
    for (const key in usedDec) {
      if (usedDec[key]['endTime'] === minEndTime) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function remove_start_time(usedDec){
    const newDec = {};
    for (const key in usedDec) {
      if (parseInt(usedDec[key]['startTime'].split(':')[0]) >= startTime) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function remove_end_time(usedDec){
    const newDec = {};
    for (const key in usedDec) {
      if (parseInt(usedDec[key]['endTime'].split(':')[0]) <= endTime) {
        if (!(key in newDec)) {
          newDec[key] = usedDec[key];
        }
      }
    }
    return newDec;
}
function RemoveDrsFunction(usedDec, keysToDelete){
    const newDec = {};
    for (const key in usedDec) {
      let flag = true;
      usedDec[key].instructors.forEach(element => {
        if (keysToDelete.includes(element)) {
          flag=false;
        }
      });
      if(flag)
        newDec[key] = usedDec[key];
    }

    return newDec;
}
function choices(decIN) {
    let usedDec = decIN;
    // first filter
    if (flagRemoveFullSections) {
      getDetails(usedDec);
      if (Object.keys(usedDec).length > 0) { 
        usedDec = FRemoveFullSections(usedDec); 
      }
    }
    if (removedDRs.length > 0) {
      if (Object.keys(usedDec).length > 0) {
          const keysToDelete = [];
          for (const key in usedDec) {
              for (const dr of removedDRs) {
                  if (usedDec[key]['instructors'].includes(dr)) {
                      keysToDelete.push(key);
                      break;
                  }
              }
          }
          usedDec = RemoveDrsFunction(usedDec, keysToDelete);
          
      }
    }
    if(flagMonday){
      usedDec = reduceMonday(usedDec);
    }
    if (flagTuesday){
      usedDec = reduceTuesday(usedDec);
    }
    if (flagWednesday){
      usedDec = reduceWednesday(usedDec);
    }
    if (flagThursday){
      usedDec = reduceThursday(usedDec);
  
    }
    if (flagSaturday){
      usedDec = reduceSaturday(usedDec);
  
    }
      // second filter
    if (flagReducedays) {
      getDetails(usedDec);
      usedDec = reduceDays(usedDec); 
    }
    if(startTime){
      usedDec = remove_start_time(usedDec);
  
    }
    if(endTime){
      courseInfo.innerText = endTime ;
      usedDec = remove_end_time(usedDec);
    }
    if (flagreduceTime) {
      getDetails(usedDec);
      if (Object.keys(usedDec).length > 0) { // Check if there are results from the first filter
        usedDec = reduceTime(usedDec); // Apply the second filter using the result from the first
      }
    }
    if (flagReduceEndTime) {
      getDetails(usedDec);
      if (Object.keys(usedDec).length > 0) { // Check if there are results from the previous filters
        usedDec = reduceEndTime(usedDec); // Apply the fourth filter using the result from the previous
      }
    }
    return usedDec;
}
  
function getDetails(usedDec) {
    minTime = null;
    minStartTime = null;
    minEndTime = null;
    minDays = null;
    for (const key in usedDec) {
    if (minDays === null || usedDec[key]['numberOfDays'].length < minDays) {
        minDays = usedDec[key]['numberOfDays'].length;
    }
    if (minStartTime === null || parseFloat(usedDec[key]['startTime'].replace(":", ".")) < parseFloat(minStartTime.replace(":", "."))) {
        minStartTime = usedDec[key]['startTime'];
    }
    if (minEndTime === null || parseFloat(usedDec[key]['endTime'].replace(":", ".")) < parseFloat(minEndTime.replace(":", "."))) {
        minEndTime = usedDec[key]['endTime'];
    }
    if (minTime === null || (parseFloat(usedDec[key]['endTime'].replace(":", ".")) - parseFloat(usedDec[key]['startTime'].replace(":", ".")) < parseFloat(minTime.replace(":", ".")))) {
        minTime = (parseFloat(usedDec[key]['endTime'].replace(":", ".")) - parseFloat(usedDec[key]['startTime'].replace(":", "."))).toString();
    }
    }
}

function generateSchedule(flag,decIn) {
  schedule.innerHTML = "";
  if (flag){ // this flag=true is for Generate button only
    dec={} ; 
    generate_dec(); 
    decIn = dec;
  }
  else{
    decIn = choices(dec);

  }
  resetDays(); // clear
  

  // Display the courses in the "schedule" div
  const isEmpty = Object.keys(decIn).length === 0;
  if (!isEmpty) {
    
    let select = null; // Initialize a variable to store the first element
    let counter = 0; // Initialize a counter variable
    for (const key in decIn) {

      if (decIn.hasOwnProperty(key)) {
        if (counter === pointer) {
          select = decIn[key].obj; 
          break; 
        }
        counter++; // Increment the counter
      }
    }
    if (!flag)
    reGenrateDec = decIn;
    courseTable = generateCourseTable(select);
    schedule.appendChild(courseTable);

  }
  
}




export { 
    reduceDays,
    reduceMonday,
    reduceTuesday,
    reduceWednesday,
    reduceThursday,
    reduceSaturday,
    reduceTime,
    FRemoveFullSections,
    reduceEndTime,
    remove_start_time,
    remove_end_time,
    RemoveDrsFunction,
    choices,
    getDetails,
    generateSchedule
};
  