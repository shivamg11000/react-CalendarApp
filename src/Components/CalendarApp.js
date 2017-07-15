import React from 'react';
import CalHead from './CalHead';
import CalBody from './CalBody';
import CalBottom from './CalBottom';
import '../styles/CalendarApp.css';

class CalendarApp extends React.Component{
  render(){
    return(
      <div className="CalendarApp col-xs-12 col-md-4 col-md-offset-4 col-ms-4 col-ms-offset-4">
        <CalHead />
        <CalBody />
        <CalBottom />
      </div>
    );
  }
}

export default CalendarApp;
