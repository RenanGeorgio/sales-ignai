import { useState } from "react";
import Button from "@mui/material/Button";

interface Props {
    close: () => void;
    children?: React.ReactNode;
};

export default function ModalSearchBusiness({ close }: Props): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [open, setOpen] = useState<boolean>(true);

    return (
        <div>
            {open ? (
                <div className='wrapperHistory'>
                    <div className='add'>
                        <span className='textTitle'>Negócios Ativos</span>
                        <div className='btnClose'>
                            <button onClick={close}>X</button>
                        </div>
                    </div>
                    <div 
                    className='formHistory'>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Etapa</span>
                            <input className='inputHistory' type="text" />
                        </div>           
                        <div className='containerHistory'>
                            <span className='spanTitle'>Setor</span>
                            <input className='inputHistory' type="text" />
                        </div>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Documentos</span>
                            <input className='inputHistory' type="text" />
                        </div>          
                        <div className='containerHistory'>
                            <span className='spanTitle'>Histórico</span>
                            <input className='inputHistory' type="text" />
                        </div>
                        <div className='containerHistory'>
                            <span className='spanTitle'>Valor</span>
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