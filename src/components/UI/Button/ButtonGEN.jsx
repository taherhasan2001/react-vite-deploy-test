import React from 'react';
import classes from './ButtonGen.module.css';

const ButtonGen = (props) => {
  const text = props.text;

  // Map over the characters in the text prop and render each character as a span element
  const letters = text.split('').map((char, index) => (
    <span key={index}>{char}</span>
  ));

  return (
    <button className={`${classes.btn} ${props.className}`} onClick={props.onClick}>
      <div className={classes.original}>{text}</div>
      <div className={classes.letters}>{letters}</div>
    </button>
  );
};

export default ButtonGen;
