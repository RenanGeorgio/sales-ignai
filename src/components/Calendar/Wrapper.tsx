// @ts-nocheck
import React from 'react';
import Calendar from '@osam2/react-calendar';

interface Props {
  comp: React.ElementType;
}

interface Events {
    children?: React.ReactNode
}

const Wrapper: React.FunctionComponent<Props> = (props: Events) => {
  const { comp: Calendar } = props;

  return (
    <div>
      <Calendar
        locale='pt-BR'
        views={['month', 'week', 'day']}
        defaultView="week"
        events={props.events}
        defaultDate={new Date(2024, 1, 7)}
    />
    </div>
  );
};

const CustomCalendar: React.FunctionComponent = (events: Events) => {
  return (
    <div>
      <Wrapper events={events} />
    </div>
  );
};

export default CustomCalendar;