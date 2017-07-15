import React from 'react';
import '../styles/CalBottom.css';

const details = [
  {date: 12, day: "WEDNESDAY", temp: "20 C"},
  {date: 13, day: "THURSDAY", temp: "27 C"},
  {date: 14, day: "FRIDAY", temp: "22 C"},
  {date: 15, day: "SATURDAY", temp: "24 C"},
  {date: 16, day: "SATURDAY", temp: "26 C"}
];

const list = details.map(({date,day,temp}) => (
  <li>
    <div className="item">
      <div className="date"><span>{date}</span></div>
      <div className="day">{day}</div>
      <div className="temp">{temp}</div>
    </div>
  </li>
));

class CalBottom extends React.Component{
  render(){
    return (
      <div className="CalBottom">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default CalBottom;
