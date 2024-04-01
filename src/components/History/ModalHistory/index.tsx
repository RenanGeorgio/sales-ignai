import { useState } from "react";
import Button from "@mui/material/Button";
import "../History.module.scss";

interface Props {
    close: () => void;
    children?: React.ReactNode;
};

export default function ModalHistory({ close }: Props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [open, setOpen] = useState<boolean>(true);

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
                            <span className='spanTitle'>Contato</span>
                            <input className='inputHistory' type="text" />
                        </div>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Assunto</span>
                            <input className='inputHistory' type="text" />
                        </div>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Data</span>
                            <input className='inputHistory' type="date" />
                        </div>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Ticket</span>
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