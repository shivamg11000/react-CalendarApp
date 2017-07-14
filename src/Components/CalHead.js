import React from 'react';
import '../styles/CalHead.css';

class CalHead extends React.Component{
  render(){
    return (
      <div className="CalHead">
        <div className="row">
          <div className="btn">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="date">
            Jul 2017
          </div>
        </div>
      </div>
    );
  }
}

export default CalHead;
