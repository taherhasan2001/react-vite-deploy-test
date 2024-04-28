class Course {
    constructor(course_label, section, instructor, days, time_display, place = null, numOfStudents = null) {
      this.course_label = course_label;
      this.time_display = time_display.replace(/\s/g, ''); // 8:00-9:15
      this.time_display = this.time_display === "" ? "N/A" : this.time_display;
      this.section = section; // 0, 1, 2, 3, ...
      this.instructor = instructor; // name
      this.instructor = this.instructor === "" ? "N/A" : this.instructor;
      this.days = days.replace(/\s/g, '').toUpperCase(); // "S, M, T, W, R" capital letters with comma
      this.days = this.days === "" ? "N/A" : this.days;
      this.place = place; // "O.Abdulhadi052"
      this.place = this.place === "" ? "N/A" : this.place;
      this.numOfStudents = numOfStudents.replace(/\s/g, ''); // "0/0" or "0 of 0"
    }
  
    time_start() { // return string
      if (this.time_display.split("-")[0] !== "N/A") {
        return this.time_display.split("-")[0];
      }
      return "N/A";
    }
  
    time_end() { // return string
      if (this.time_display.split("-")[0] !== "N/A") {
        return this.time_display.split("-")[1];
      }
      return "N/A";
    }
  
    collision(other) { // other is another Course object
      // return true if this and other have collision
      let flag_days = true; // keep true if no days in common
      // if (this.course_label.substring(0, 3) === "lab" && this.course_label.slice(3) === other.course_label && this.instructor != other.includes )
      //   return true;
      // if  (other.course_label.substring(0, 3) === "lab" && other.course_label.slice(3) === this.course_label && this.instructor != other.includes )
      //   return true;
      if (this.days == "N/A" || other.days == "N/A"){
        return false;
      }
      if (this.time_display == "N/A" || other.time_display == "N/A"){
        return false;
      }
      for (const day of this.days.split(",")) {
        if (other.days.split(",").includes(day)) {
          flag_days = false;
        }
      }
      if (flag_days) { // no days in common
        return false;
      }
      if (
        parseFloat(this.time_start().replace(":", ".")) >=
        parseFloat(other.time_end().replace(":", "."))
      ) {
        return false;
      }
      if (
        parseFloat(this.time_end().replace(":", ".")) <=
        parseFloat(other.time_start().replace(":", "."))
      ) {
        return false;
      }
      return true;
    }
  
    toString() {
      return `${this.course_label}#${this.section}#${this.instructor}#${this.days}#${this.time_start()}#${this.time_end()}#${this.place}#${this.numOfStudents}`;
    }
  
}

export default Course;
