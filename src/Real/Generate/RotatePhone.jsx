import {React,Fragment} from 'react';
import classes from './RotatePhone.module.css';


const RotatePhone = () => {
  return (
    <div className={classes.container}>
        <div className={classes.phone}></div>
        <div className={classes.message}>
        Rotate your device for better view!
        </div>
    </div>
  );
};

export default RotatePhone;
