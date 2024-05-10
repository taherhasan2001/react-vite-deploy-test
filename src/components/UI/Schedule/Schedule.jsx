import React, { useRef, useEffect, forwardRef, Fragment } from 'react';

import classes from './Schedule.module.css';

const Schedule = forwardRef((props, ref) => {
  // Create refs for each day container
  const SaturdayRef = useRef(null);
  const SundayRef = useRef(null);
  const MondayRef = useRef(null);
  const TuesdayRef = useRef(null);
  const WednesdayRef = useRef(null);
  const ThursdayRef = useRef(null);
  const FridayRef = useRef(null);
  const Table = useRef(null);

  // Pass refs to the parent component
  useEffect(() => {
    props.onRefs({
      "table": Table,
      "schedule-day-S": SaturdayRef,
      "schedule-day-N": SundayRef,
      "schedule-day-M": MondayRef,
      "schedule-day-T": TuesdayRef,
      "schedule-day-W": WednesdayRef,
      "schedule-day-R": ThursdayRef,
      "schedule-day-F": FridayRef
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount
  

  return (
  <Fragment>
    <div  ref={Table}></div>
    <div className={classes.container} ref={ref}>
      <div className={classes.schedule}>
        <div className={`${classes.row} ${classes.header}`}>
          <div >
                    <div className={classes.headerSlot} style={{left:'0px', textAlign:'center', userSelect: 'none'}}>Day</div>
                    <div className={classes.headerSlot} style={{left:'7.7%', textAlign:'left', userSelect: 'none'}}>7</div>
                    <div className={classes.headerSlot} style={{left:'15.4%', textAlign:'left', userSelect: 'none'}}>8</div>
                    <div className={classes.headerSlot} style={{left:'23.1%', textAlign:'left', userSelect: 'none'}}>9</div>
                    <div className={classes.headerSlot} style={{left:'30.8%', textAlign:'left', userSelect: 'none'}}>10</div>
                    <div className={classes.headerSlot} style={{left:'38.5%', textAlign:'left', userSelect: 'none'}}>11</div>
                    <div className={classes.headerSlot} style={{left:'46.2%', textAlign:'left', userSelect: 'none'}}>12</div>
                    <div className={classes.headerSlot} style={{left:'53.9%', textAlign:'left', userSelect: 'none'}}>13</div>
                    <div className={classes.headerSlot} style={{left:'61.6%', textAlign:'left', userSelect: 'none'}}>14</div>
                    <div className={classes.headerSlot} style={{left:'69.3%', textAlign:'left', userSelect: 'none'}}>15</div>
                    <div className={classes.headerSlot} style={{left:'77%', textAlign:'left', userSelect: 'none'}}>16</div>
                    <div className={classes.headerSlot} style={{left:'84.7%', textAlign:'left', userSelect: 'none'}}>17</div>
                    <div className={classes.headerSlot} style={{left:'92.4%', textAlign:'left', userSelect: 'none'}}>18</div> 
                </div>
        </div>
        {/* Days */}
        {/* Saturday */}
        <div className={`${classes['schedule-day-0']} ${classes['schedule-day-S']} ${classes.row}`}>
          <div className={classes.day}>Sat</div>
          <div ref={SaturdayRef}></div>
        </div>
        {/* Sunday */}
        <div className={`${classes['schedule-day-1']} ${classes['schedule-day-N']} ${classes.row}`}>
          <div className={classes.day}>Sun</div>
          <div ref={SundayRef}></div>
        </div>
        {/* Monday */}
        <div className={`${classes['schedule-day-2']} ${classes['schedule-day-M']} ${classes.row}`}>
          <div className={classes.day}>Mon</div>
          <div ref={MondayRef}></div>
        </div>
        {/* Tuesday */}
        <div className={`${classes['schedule-day-3']} ${classes['schedule-day-T']} ${classes.row}`}>
          <div className={classes.day}>Tue</div>
          <div ref={TuesdayRef}></div>
        </div>
        {/* Wednesday */}
        <div className={`${classes['schedule-day-4']} ${classes['schedule-day-W']} ${classes.row}`}>
          <div className={classes.day}>Wed</div>
          <div ref={WednesdayRef}></div>
        </div>
        {/* Thursday */}
        <div className={`${classes['schedule-day-5']} ${classes['schedule-day-R']} ${classes.row}`}>
          <div className={classes.day}>Thurs</div>
          <div ref={ThursdayRef}></div>
        </div>
        {/* Friday */}
        <div className={`${classes['schedule-day-6']} ${classes['schedule-day-F']} ${classes.row}`}>
          <div className={classes.day}>Fri</div>
          <div ref={FridayRef}></div>
        </div>
      </div>
    </div>
  </Fragment>

  );
});

export default Schedule;
