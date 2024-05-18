import {React,Fragment} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModule.module.css';
import { reveal } from '../utils/animation';
import { motion } from 'framer-motion';


const Backdrop = (props) =>{
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}
const ModalOverlay = props =>{
  return(

    <motion.div
    layout
    initial={{ height: 0 }}
    animate={{ height: 'unset' }}
    transition={{ delay:  0 , duration: 1 }} // animationStart
    className="flex flex-col items-center text-center"
  >
      <motion.span

          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{ delay:  0   , duration: 1 }} //animationStart + 1.2
          className="mb-30px w-3/4 lg:w-1/3 md:w-1/2 text-25px leading-tight text-black " // Changed text-white to text-black
        >
      <Card className={classes.modal}>

          <header className={classes.header}>
            <h2 >{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions }>
            <Button onClick={props.onConfirm}>حسنا</Button>
          </footer>
      </Card>

        </motion.span>
    </motion.div>
  );
}
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))}
    </Fragment>
  );
};

export default ErrorModal;