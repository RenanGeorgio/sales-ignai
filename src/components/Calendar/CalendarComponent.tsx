// @ts-nocheck
import { useState } from 'react';
import Calendar from '@osam2/react-calendar';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import CalendarLeft from './CalendarLeft';
import { Plus, Tag } from '../Image/icons';
import EventModal from './Event/EventComponent';
import './calendar.css'

const events = [
    {
        id: 1,
        color: '#fd3153',
        from: '2024-01-02T07:00:00+00:00',
        to: '2024-01-05T08:00:00+00:00',
        title: 'Reunião'
    },
    {
        id: 2,
        color: '#1ccb9e',
        from: '2024-01-01T13:00:00+00:00',
        to: '2024-01-05T14:03:00+00:00',
        title: 'Evento 2'
    },
    {
        id: 3,
        color: '#3694DF',
        from: '2024-01-07T13:00:00+00:00',
        to: '2024-01-09T20:00:00+00:00',
        title: 'Evento 3'
    },
    {
        id: 4,
        color: '#000',
        from: '2024-01-18T13:00:00+00:00',
        to: '2024-01-18T20:00:00+00:00',
        title: 'Evento 4'
    }
];

export default function CalendarComponent() {
    const [view, setView] = useState('month');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='wrapperCalendar' >
            <div className='containerCalendar'>
                <div className='containerLeft' >
                    <div className='containerButton'>
                        <Button
                            onClick={handleOpen}
                            variant='contained' sx={{ width: '95%', height: '50px' }}>
                            <span className='iconPlus'><Plus /></span>
                            Novo evento
                        </Button>
                    </div>
                    <CalendarLeft />
                    <div className='containerLabel'>
                        <div className='label'>Labels</div>
                        <div style={{ display: 'flex' }}>
                            <span><Tag /></span>
                            <button>Adicionar / Remover</button>
                        </div>
                        <div className='list'>
                            <ul>
                                <li> <div className="span1"><span className='span1' /></div> Leads</li>
                                <li><div className="span2"><span className='span1' /></div>  Implementação</li>
                                <li><div className="span3"><span className='span1' /></div>  Clientes</li>
                                <li><div className="span4"><span className='span1' /></div>  Atendimento</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
                    <Calendar
                        locale='pt-BR'
                        views={['month', 'week', 'day']}
                        defaultView="week"
                        events={events}
                        defaultDate={new Date(2024, 1, 7)}
                    />
                    <div>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description" >
                            <EventModal close={handleClose} />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}