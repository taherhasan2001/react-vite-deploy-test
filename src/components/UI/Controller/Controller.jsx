import React from 'react';
import classes from './Controller.module.css';
import Button from '../Button/Button';
const Controller = (props) => {
  const { first, second } = props.onClick;
  
  return (
    <div className={classes.container}>
      <Button type="submit" className={classes.btn} onClick={first}>
        {props.name.first}
      </Button>

      <Button type="submit" className={classes.btn} onClick={second}>
        {props.name.second}
      </Button>
    </div>
  );
};

export default Controller;
