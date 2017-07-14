import React from 'react';
import CalHead from './CalHead';
import CalBody from './CalBody';
import CalBottom from './CalBottom';
import '../styles/CalendarApp.css';

class CalendarApp extends React.Component{
  render(){
    return(
      <div className="CalendarApp">
        <CalHead />
        <CalBody />
        <CalBottom />
      </div>
    );
  }
}

export default CalendarApp;
