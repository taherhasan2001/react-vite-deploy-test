import React from 'react';
import { motion } from 'framer-motion';
import Compass from './Compass';
import { animationStart, reveal } from '../utils/animation';

function HeroText(props) {
  console.log(props.flag)
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: 'unset' }}
      transition={{ delay: props.flag? animationStart : 0, duration: 1 }} // animationStart
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: props.flag? animationStart + 1: 0, duration: 0.5 }} // animationStart + 1
        className="flex flex-col text-8vw md:text-40px font-bold mb-24px pt-100px text-black" // Changed text-white to text-black
      >
        <span className="flex items-center gap-6 md:gap-10">
          BZU <Compass /> HUB
        </span>
        <span>schedule builder</span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: props.flag? animationStart +1.2 : 0  , duration: 0.5 }} //animationStart + 1.2
        className="mb-30px w-3/4 lg:w-1/3 md:w-1/2 text-25px leading-tight text-black" // Changed text-white to text-black
      >
        هنا حيث بإمكانك بناء جدولك الدراسي بأقل جهد ووقت ممكن
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
