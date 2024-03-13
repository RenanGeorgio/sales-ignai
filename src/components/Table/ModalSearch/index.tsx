import { useState } from 'react';
import Button from '@mui/material/Button';

export default function ModalSearch({ close }) {
    const [open, setOpen] = useState(true);

    return (
        <div>
            {open ? (
                <div className='wrapperHistory'>
                    <div className='add'>
                        <span className='textTitle'>Adicionar</span>
                        <div className='btnClose'>
                            <button onClick={close}>X</button>
                        </div>
                    </div>
                    <div 
                    className='formHistory'>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Lead</span>
                            <input className='inputHistory' type="text" />
                        </div>              
                        <div className='containerHistory'>
                            <span className='spanTitle'>Lead Origem</span>
                            <input className='inputHistory' type="text" />
                        </div>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Empresa</span>
                            <input className='inputHistory' type="text" />
                        </div>             
                        <div className='containerHistory'>
                            <span className='spanTitle'>Histórico</span>
                            <input className='inputHistory' type="text" />
                        </div>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Status</span>
                            <input className='inputHistory' type="text" />
                        </div>
                        <div className='buttonContainerHistory'>
                            <Button variant='contained'>Confirmar</Button>
                            <Button variant='contained' disabled>Cancelar</Button>
                        </div>
                    </div>
                </div>
            ) : ''}
        </div>
    );
}