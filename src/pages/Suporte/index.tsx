import React from 'react';
import Navbar from "../../components/Navbar";
import { FileTextIcon,UsersIcon } from '../../components/Image/icons';
import '../../styles/chatbot.css';

const Suporte = () => {
    return (
        <div className="page-content">
            <Navbar />
            <h1 className="text">Suporte ao cliente Ignai</h1>
            <div>
            <div style={{marginLeft:'100px', display:'flex'}}>
                <button className="blueButton">
                    <UsersIcon/>
                    Pedido
                </button>
                <button className="grayButton">
                    <FileTextIcon />
                    Tickets
                </button>
            </div>
            </div>
            <textarea
                className="largeInput"
                placeholder="Escreva aqui a sua necessidade que iremos resolver o mais rápido possível"
            />
        </div>
    )
}

export default Suporte;