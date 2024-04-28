import data from './BZU.json';

const getAllCoursesNames = () => {
  let allCoursesNames = [];
  for (const record of data) {
    if (!allCoursesNames.includes(record["name of course"]) && record["name of course"].substring(0, 3) !== "sub") {
      allCoursesNames.push(record["name of course"]);
    }
  }
  return allCoursesNames;
}

export default getAllCoursesNames;
