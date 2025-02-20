import React from 'react';
import Navbar from "../../components/Navbar";
import { FileTextIcon, LinkIcon, UsersIcon } from '../../components/Image/icons';
import '../../styles/chatbot.css';

const Whatsapp = () => {
    return (
        <div className="page-content">
            <Navbar />
            <h1 className="text">Automação WhatsApp</h1>
            <div>
                <div style={{ marginLeft: '100px', display: 'flex' }}>
                    <button className="blueButton">
                        <UsersIcon />
                        Estruturação
                    </button>
                    <button className="grayButton">
                        <LinkIcon />
                        Flow Chart
                    </button>
                    <button className="grayButton">
                        <FileTextIcon />
                        Painel
                    </button>
                </div>
            </div>
            <textarea
                className="largeInput"
                placeholder="Escreva aqui a sua necessidade de automação de WhatsApp que iremos configurar para você..."
            />
        </div>
    )
}

export default Whatsapp;