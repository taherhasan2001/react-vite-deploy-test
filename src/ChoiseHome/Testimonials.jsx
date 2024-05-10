import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt as halfStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import classes from './Testimonials.module.css';


import p1 from '../Intro/assets/p1.png'; // Import the image for Choice 1
import p2 from '../Intro/assets/p2.png'; // Import the image for Choice 2
import p3 from '../Intro/assets/p3.png'; // Import the image for Choice 3



const Testimonial = ({ image, name, stars, content }) => {
  const renderStars = (starCount) => {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        starsArray.push(<FontAwesomeIcon key={i} icon={solidStar} />);
      } else if (i === Math.ceil(starCount) && starCount % 1 !== 0) {
        starsArray.push(<FontAwesomeIcon key={i} icon={halfStar} />);
      } else {
        starsArray.push(<FontAwesomeIcon key={i} icon={farStar} />);
      }
    }
    return starsArray;
  };

  return (
    <div className={classes.col}>
      <div className={classes.testimonial}>
        <img  className={classes.img}src={image} alt="" />
        <div className={classes.name}>{name}</div>
        <div className={classes.stars}>{renderStars(stars)}</div>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <div className={classes.inner}>
        <h1>Testimonials</h1>
        {/* <div className={classes.border}></div> */}
        <div className={classes.row}>
          <Testimonial
            image={p1}
            name="Full name"
            stars={5}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <Testimonial
            image={p2}
            name="Full name"
            stars={3.5}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <Testimonial
            image={p3}
            name="Full name"
            stars={4}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
