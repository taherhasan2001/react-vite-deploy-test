import React from 'react';
import Logo from './Logo';
import ArrowRight from './ArrowRight';
import { motion } from 'framer-motion';
import { animationStart, reveal } from '../utils/animation';
function Navbar(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: props.flag? animationStart : 0 }} // animationStart 
    >
<motion.div
  variants={reveal}
  initial="hiddenVariant"
  animate="revealedVariant"
  transition={{
    ease: 'easeIn',
    type: 'tween',
    staggerChildren: 0.1,
    duration: 0.5,
    delayChildren:  props.flag? animationStart + 0.5 : 0, // animationStart + 0.5
  }}
  style={{ backgroundColor: '#008000' }}
  className="w-full flex items-center justify-around h-80px fixed top-0 z-100"
>
        <motion.div variants={reveal}>
          <Logo />
        </motion.div>

        <motion.div
          variants={reveal}
          className="flex gap-5px items-center cursor-pointer"
        >
<span className="mb-3px text-white" onClick={props.handleClick}>{props.text}</span>
          <ArrowRight onClick={props.handleClick}/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
