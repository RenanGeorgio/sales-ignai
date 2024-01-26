import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './calendarleft.css'


export default function CalendarLeft() {
  const [value, onChange] = useState(new Date());

  const tileContent = ({ date }) => {
    const currentDate = Number(String(date).split(" ")[2]);
    const data = [
  
    ];
    return (
      <div className="tile-content">
        {currentDate > 0 && (
          <span className="tile-number">
            {data[currentDate]?.map((el) => {
              return <div>{el}</div>;
            })}
          </span>
        )}
      </div>
    );
  };



  return (
    <div >
      <Calendar
       onChange={onChange}
       value={value}
       tileContent={tileContent}
       showNeighboringMonth={false}
      />
    </div>
  )
}
