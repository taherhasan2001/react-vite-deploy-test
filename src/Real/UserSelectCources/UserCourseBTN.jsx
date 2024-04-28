import React from 'react';
import classes from './UserCourseBTN.module.css';

const UserCourseBTN = (props) => {
  return (

    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={() => props.onClick(props.children)} // Pass the button title to the onClick handler
    >
      <span>{props.children} </span>
      
    </button>
  );
};
export default UserCourseBTN;
