import React from 'react';
import '../styles/CalBody.css';

const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

const dayslist = days.map((day) => {
  const color = day==="SUN" || day==="SAT" ? "#f44" : "#111"  ;
  return (<li style={{color:color}}>
            {day}
          </li>);
});

let list = [];
for (let i=0;i<42;i++){
  list.push(<li>{i+1}</li>);
}

class CalBody extends React.Component{
  render(){
    return(
      <div className="CalBody">
        <div className="DayName"><ul>{dayslist}</ul></div>
        <div className="DateItems"><ul>{list}</ul></div>
      </div>
    )
  }
}

export default CalBody;
