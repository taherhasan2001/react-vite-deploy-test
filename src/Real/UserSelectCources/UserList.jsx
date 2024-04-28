import React from 'react';
import classes from './UserList.module.css';
import UserCourseBTN from './UserCourseBTN';

const UserList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.courses.map((user, index) => (
          <li key={`${user.course_label}-${index}`}>
            <UserCourseBTN onClick={props.onClick}>{user[0].course_label}</UserCourseBTN>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
