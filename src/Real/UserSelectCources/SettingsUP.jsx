import  { React,useRef } from 'react';
import classes from './SettingsUP.module.css';

const Settings = (props) => {
  const SatRef = useRef(null);
  const MonRef = useRef(null);
  const TueRef = useRef(null);
  const WedRef = useRef(null);
  const ThuRef = useRef(null);

  const RedDays = useRef(null);
  const RedTime = useRef(null);
  const RemFullSec = useRef(null);
  const RedEndTime = useRef(null);

//   const handleChanges = () =>{
//     props.onChange()
//   }

    return (
        <div className={classes.mainContainer}>
            <fieldset>
                <div className={classes.container}>
                <legend>Select the days you want to remove</legend>

                    <input onChange={() => props.onChange(SatRef)}  ref={SatRef} type="checkbox" className={`${classes.chip} ${classes.purble}`} role="switch" value="Sat" aria-label="Pear"/>
                    <input onChange={() => props.onChange(MonRef)} ref={MonRef} type="checkbox" className={`${classes.chip} ${classes.yellow}`} role="switch" value="Mon" aria-label="Banana" />
                    <input onChange={() => props.onChange(TueRef)} ref={TueRef} type="checkbox" className={`${classes.chip} ${classes.pink}`} role="switch" value="Tue" aria-label="Apple" />
                    <input onChange={() => props.onChange(WedRef)} ref={WedRef} type="checkbox" className={`${classes.chip} ${classes.orange}`} role="switch" value="Wed" aria-label="Peach" />
                    <input onChange={() => props.onChange(ThuRef)} ref={ThuRef} type="checkbox" className={`${classes.chip} ${classes.orange}`} role="switch" value="Thurs" aria-label="Peach" />
                </div>
            </fieldset>

            <fieldset>
                <div className={classes.container}>
                <legend>Advanced settings</legend>

                    <input ref={RedDays} onChange={() => props.onChange(RedDays)} type="checkbox" className={`${classes.chip} ${classes.bounce} ${classes.green}`} role="switch" value="Reduce Days" aria-label="Pear" />
                    <input ref={RedTime} onChange={() => props.onChange(RedTime)} type="checkbox" className={`${classes.chip} ${classes.bounce} ${classes.pink}`} role="switch" value="Reduce Time" aria-label="Banana" />
                    <input ref={RemFullSec} onChange={() => props.onChange(RemFullSec)} type="checkbox" className={`${classes.chip} ${classes.bounce} ${classes.pink}`} role="switch" value="Remove Full Sections" aria-label="Apple" />
                    <input ref={RedEndTime} onChange={() => props.onChange(RedEndTime)} type="checkbox" className={`${classes.chip} ${classes.bounce} ${classes.pink}`} role="switch" value="Reduce End Time" aria-label="Peach" />
                </div>
            </fieldset>
        </div>
    );
};

export default Settings;
