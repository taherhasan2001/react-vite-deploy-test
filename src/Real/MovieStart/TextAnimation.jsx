import React from 'react';
import classes from './TextAnimation.module.css'; 

class TextAnimation extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.changeBackGNDtoWhite !== prevProps.changeBackGNDtoWhite && this.props.changeBackGNDtoWhite) {
      document.body.style = 'background: white;'; 
      this.props.handleChangeStage();
    }
  }

  handleBTN = () => {
    document.body.style = 'background: white;'; 
    this.props.handleChangeStage();
  }

  render() {
    return (
      <div className={classes["sp-container"]}>
        <div className={classes["sp-content"]}>
          <div className={classes["sp-globe"]}></div>
          <h2 className={classes["frame-1"]}>تعبت وإنت بتبعكش ؟</h2>
          <h2 className={classes["frame-2"]}>خايف جدولك الدراسي ما يزبط معك ؟</h2>
          <h2 className={classes["frame-3"]} >ما إلك غير مولد البرامج</h2>
          <h2 className={classes["frame-4"]}>النسخة الأخيرة</h2>
          <h2 className={classes["frame-5"]}>
            <span>WELCOME TO </span>
            <span>BZU </span>
            <span>124!</span>
          </h2>
          <button className={classes["sp-circle-link"]} onClick={this.handleBTN} type="button">START</button>
        </div>
      </div>
    );
  }
}

export default TextAnimation;
