import React from 'react';
import classes from './FeedBack.module.css';
import facebookLogo from './logos/facebookLogo.png';
import linkedinLogo from './logos/linkedinLogo.png';
import githubLogo from './logos/githubLogo.png';
const FeedBack = (props) => {
  return (
    <div className={classes.centerContainer}>
      <div className={classes.contact}>
          <p className={`${classes.feedBack} ${classes.userSelect}`}>
            Give us your feedback using this&nbsp;
            <a href="https://forms.gle/5TSqDeE47YyZZgxN6" target="_blank" rel="noopener noreferrer">
              form
            </a>
            .
          </p>

          <div className={classes.profile}>
            <div className={classes.profileInfo}>
              <a href="https://www.linkedin.com/in/taher-hasan-8059a8267/" target="_blank" rel="noopener noreferrer" id="linkedin-link">
                <img src={linkedinLogo} alt="LinkedIn Logo" />
              </a>
            </div>
          </div>

          <div className={classes.profile}>
            <div className={classes.profileInfo}>
              <a href="https://www.facebook.com/profile.php?id=100009133824763&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" id="facebook-link">
                <img src={facebookLogo} alt="Facebook Logo" />
              </a>
            </div>
          </div>

          <div className={classes.profile}>
            <div className={classes.profileInfo}>
              <a href="https://github.com/TaherHasan94" target="_blank" rel="noopener noreferrer" id="github-link">
                <img src={githubLogo} alt="GitHub Logo" />
              </a>
            </div>
          </div>
      </div>
    </div>
   
  );
};

export default FeedBack;
