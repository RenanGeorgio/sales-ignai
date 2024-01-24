import React from 'react'
import Calendar from 'react-calendar';

import './calendar.css'
import CalendarLeft from './CalendarLeft';
import Tag from '../Image/icons';
// import {DateCalendar}

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2019-05-02T18:00:00+00:00',
    to: '2019-05-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2019-05-01T13:00:00+00:00',
    to: '2019-05-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2019-05-05T13:00:00+00:00',
    to: '2019-05-05T20:00:00+00:00',
    title: 'This is also another event'
}];

// const styles = '../Calendar/calendar.css'
// const CalendarContainerRight = styles

// const CalendarContainerLeft = styles

export default function CalendarComponent() {
    return (
        <div style={{ width: '94.5%', height: '100%', display: 'flex', paddingLeft: '5.3rem' }}>
            <div style={{ alignSelf: 'stretch', background: 'white', boxShadow: '0px 4px 18px rgba(75, 70, 92, 0.10)', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>


            </div>
            <div style={{ width: '100%', height: '100%', display: 'flex', gap: 4, justifyContent: 'space-between' }}>
                <div style={{ width: '20%', height: '100%', border: '1px solid black' }} >
                    {/* <div className='react-calendar1'>
                     
                        <Calendar
                        className='react-calendar1'
                        defaultView='decade'   
                        />
                      
                    </div> */}
                    <CalendarLeft/>
                    {/* <div style={{background:'red', height:'300px'}}>

                    </div> */}
                    <div style={{width: '94%', height: '200px', flexDirection:'column', gap: 16, display: 'flex', padding:20}}>
   <div className='label'>Labels</div>
   <div style={{display:'flex'}}>
    <span><Tag/></span>
    <button>Adicionar / Remover</button>
   </div>

   <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <ul>
         <li> <div className="span1"><span className='span1'/></div> Leads</li>
        <li><div className="span2"><span className='span1'/></div>  Implementação</li>
        <li><div className="span3"><span className='span1'/></div>  Clientes</li>
        <li><div className="span4"><span className='span1'/></div>  Atendimento</li>
    </ul>
   </div>
   
</div>
                </div>
                <div style={{ width: '83%', height: '40.6rem', border: '1px solid red', overflowY: 'scroll' }}>
                    <Calendar
                    />
                </div>
            </div>
        </div>
    )
}
