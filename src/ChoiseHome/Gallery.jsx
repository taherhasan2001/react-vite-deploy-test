import React from 'react';
import classes from './Gallery.module.css';

import choice1Image from '../Intro/assets/dr1.png'; // Import the image for Choice 1
import choice2Image from '../Intro/assets/dr3.png'; // Import the image for Choice 2
import choice3Image from '../Intro/assets/sch.png'; // Import the image for Choice 3



function Gallery() {
  return (
    <div className={classes.gallery} id="Gallery">
      <h1>what's<span>New?!</span></h1>

      <div className={classes.gallery_image_box}>
        <div className={classes.gallery_image}>
          <img src={choice1Image} alt="Sweet 1" />

          <h3>Rooms</h3>
          <p>
            البحث عن سجل حجز قاعات الجامعة ، يساعد ذلك في البحث عن قاعة بديلة لدكتور يريد نقل طلابقه إلى قاعة أوسع او بكلية أخرى وكما يساعد الطلبة في البحث عن قاعة فارغة لتوفير مكان لاجتماعاتهم
          </p>
          <a href="#" className={classes.gallery_btn}>Order Now</a>
        </div>

        <div className={classes.gallery_image}>
          <img src={choice2Image} alt="Sweet 3" />

          <h3>Teacher finder</h3>
          <p>
            البحث عن المحاضرات التي يقدمها دكتور ما بمواعيدها الساعات والأيام 
          </p>
          <a href="#" className={classes.gallery_btn}>Order Now</a>
        </div>

        <div className={classes.gallery_image}>
          <img src={choice3Image} alt="Coffee" />

          <h3>Schedule generator</h3>
          <p>
            إنشاء كل الجداول الممككنة لجدولك الدراسي مع الاختيارات المناسبة التي توفر عليك الوقت والجهد
          </p>
          <a href="#" className={classes.gallery_btn}>لنبدأ</a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
