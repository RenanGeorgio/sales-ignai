import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './event.css'

import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

const style = {
    position: 'absolute',
    top: '50%',
    left: '85%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pr: 10,
    pl: 5,
    paddingTop: 7
};

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function EventModal({ close }) {
    const [open, setOpen] = React.useState(true);
    return (
        <div>
            {open ? (
                <Box sx={style}>
                    <div className='novoEvento'>
                        <span className='textTitle'>Novo Evento</span>
                        <div className='btnClose'>
                            <button onClick={close}>X</button>
                        </div>
                    </div>
                    <div 
                    className='formModal'>
                        <div className='containerInput'>
                            <span className='spanTitle'>Título</span>
                            <input className='inputForm' type="text" />
                        </div>
                        <div className='containerInput'>
                            <span className='spanTitle'>Label</span>
                            <select className='inputForm'>
                                <option value="" selected>Selecione...</option>
                                <option value="" >Selecione 1</option>
                                <option value="" >Selecione 2</option>
                                <option value="" >Selecione 3</option>
                            </select>
                        </div>
                        <div className='containerInput'>
                            <span className='spanTitle'>Data e horário: início</span>
                            <input className='inputForm' type="text" />
                        </div>
                        <div className='containerInput'>
                            <span className='spanTitle'>Data e horário: fim</span>
                            <input className='inputForm' type="text" />
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                            <div style={{ height: 18, padding: 3, background: 'white', borderRadius: 100, border: '1px rgba(255, 255, 255, 0.80) solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                                <Switch {...label} />
                            </div>
                            <span >Dia todo</span>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                            <div style={{ height: 18, padding: 3, background: 'white', borderRadius: 100, border: '1px rgba(255, 255, 255, 0.80) solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                                <Switch {...label} defaultChecked />
                            </div>
                            <span >Reunião online</span>
                        </div>
                        <div className='containerInput'>
                            <span className='spanTitle'>Data e horário: início</span>
                            <input className='inputForm' type="text" />
                        </div>
                        <div className='containerInput'>
                            <span className='spanTitle'>Data e horário: fim</span>
                            <input className='inputForm' type="text" />
                        </div>

                        <div style={{ alignSelf: 'stretch', height: 79, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>

                            <div className='containerInput'>
                                <span className='spanTitle'>Descrição</span>
                                <TextField
                                    className='inputTextArea'
                                    id="outlined-multiline-static"
                                    multiline
                                    maxRows={2}
                                />
                            </div>

                        </div>

                        <div className='buttonContainer'>
                            <Button variant='contained'>Enviar convite</Button>
                            <Button variant='contained' disabled>Cancelar</Button>
                        </div>
                    </div>

                </Box>
            ) : ''}
        </div>
    );
}