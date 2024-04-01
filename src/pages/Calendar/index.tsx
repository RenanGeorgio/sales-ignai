import React from 'react';
import Navbar from '../../components/Navbar';
import LayoutCalendar from '../../components/Model/CalendarLayout'

const CalendarPage = () => {
  return (
    <div className="page-content">
      <Navbar />
     <LayoutCalendar/>
    </div>
  );
};

export default CalendarPage;
