import { useState } from 'react';
import Calendar from 'react-calendar';
import './calendarleft.css';

export default function CalendarLeft() {
  const [value, onChange] = useState(new Date());

  return (
    <div >
      <Calendar
        value={value}
        showNeighboringMonth={false}
        onClickDay={(day) => {onChange(day)}}
      />
    </div>
  );
}