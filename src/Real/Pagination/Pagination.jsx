import React, { Fragment } from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
  
  return (
    <div className={classes.container}>
        <p > {props.children}</p> 
    </div>

  );
};

export default Pagination;
