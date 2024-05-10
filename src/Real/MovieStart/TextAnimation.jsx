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
          <h2 className={classes["frame-1"]}>BZU - HUB</h2>
          <h2 className={classes["frame-2"]}>REPRESENT</h2>
          <h2 className={classes["frame-3"]}>SCHEDULE GENERATOR!</h2>
          <h2 className={classes["frame-4"]}>TEST IT!</h2>
          <h2 className={classes["frame-5"]}>
            <span>FOR </span>
            <span>NEW SMURFS </span>
            <span>124</span>
          </h2>
          <button className={classes["sp-circle-link"]} onClick={this.handleBTN} type="button">START</button>
        </div>
      </div>
    );
  }
}

export default TextAnimation;
