import React from 'react';
import Navbar from "../../components/Navbar";
import usersImage from '../../components/Image/users.svg';
import fileTextImage from '../../components/Image/file-text.svg';
import '../../styles/chatbot.css';

const Suporte = () => {
    return (
        <div className="page-content">
            <Navbar />
            <h1 className="text">Suporte ao cliente Ignai</h1>
            <div>
            <div style={{marginLeft:'100px'}}>
                <button className="blueButton">
                <img src={usersImage} alt="Users" />
                Pedido
                </button>
                <button className="grayButton">
                <img src={fileTextImage} alt="File Text" />
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