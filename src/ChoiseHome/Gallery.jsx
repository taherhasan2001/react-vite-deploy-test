import React from 'react';
import classes from './Gallery.module.css';

import choice1Image from '../Intro/assets/dr1.png'; // Import the image for Choice 1
import choice2Image from '../Intro/assets/dr3.png'; // Import the image for Choice 2
import choice3Image from '../Intro/assets/sch.png'; // Import the image for Choice 3

import { motion } from 'framer-motion';
import { animationStart, reveal } from '../utils/animation';

function Gallery(props) {


  return (

    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: 'unset' }}
      transition={{ delay: props.flag? animationStart : 0, duration: 1 }} // animationStart
      className="flex flex-col items-center text-center"
    >
      <div className={classes.gallery} id="Gallery">

        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{ delay: props.flag? animationStart + 1: 0, duration: 0.5 }} // animationStart + 1
          className="flex flex-col text-8vw md:text-40px font-bold mb-24px pt-100px text-black" // Changed text-white to text-black
        >
          <h1>what's<span>New?!</span></h1>
        </motion.div>

        <motion.span
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{ delay: props.flag? animationStart +1.2 : 0  , duration: 0.5 }} //animationStart + 1.2
          className="mb-30px w-3/4 lg:w-1/3 md:w-1/2 text-25px leading-tight text-black" // Changed text-white to text-black
        >
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
        </motion.span>
      </div>
    </motion.div>

  );
}

export default Gallery;
