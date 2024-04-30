import React from 'react';
import classes from './ChoiceComponent.module.css';
import choice1Image from '../Intro/assets/dr1.png'; // Import the image for Choice 1
import choice2Image from '../Intro/assets/dr3.png'; // Import the image for Choice 2
import choice3Image from '../Intro/assets/sch.png'; // Import the image for Choice 3

function ChoiceComponent() {
  // Function to print "Hello, world!" when a choice is clicked
  const printHello = () => {
    setTimeout(() => {
      console.log("Hello, world!");
    }, 1000); // Print "Hello, world!" after 1 second
  };

  // Function to rotate the clicked choice container
  const rotateChoice = (event) => {
    event.currentTarget.classList.toggle(classes.rotate);
    printHello(); // Call printHello function when the choice is clicked
  };

  return (
    <div className={classes.choicesContainer}>
      <div className={classes.choice} onClick={rotateChoice}>
        <img src={choice1Image} alt="Choice 1" />
        <h3>قاعات الجامعة</h3>
        <p>Description of Choice 1</p>
      </div>
      <div className={classes.choice} onClick={rotateChoice}>
        <img src={choice2Image} alt="Choice 2" />
        <h3>رحلة البحث عن معلم المساق</h3>
        <p>Description of Choice 2</p>
      </div>
      <div className={classes.choice} onClick={rotateChoice}>
        <img src={choice3Image} alt="Choice 3" />
        <h3>انشاء الجدول الفصلي</h3>
        <p>Description of Choice 3</p>
      </div>
    </div>
  );
}

export default ChoiceComponent;
