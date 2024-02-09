import React from 'react';
import Navbar from '../../components/Navbar';
import usersImage from '../../components/Image/users.svg';
import linkImage from '../../components/Image/link.svg';
import fileTextImage from '../../components/Image/file-text.svg';
import '../../styles/chatbot.css';

const ChatBot = () => {
  return (
    <div className="page-content">
      <Navbar />
      <h1 className='text'>Automação ChatBot</h1>
      <div>
        <div style={{marginLeft:'100px'}}>
          <button className="blueButton">
            <img src={usersImage} alt="Users" />
            Estruturação
          </button>
          <button className="grayButton">
            <img src={linkImage} alt="Link" />
            Flow Chart
          </button>
          <button className="grayButton">
            <img src={fileTextImage} alt="File Text" />
            Painel
          </button>
        </div>
      </div>

      <textarea
        className="largeInput"
        placeholder="Escreva aqui sua necessidade de automação de ChatBot que iremos configurar para você..."
      />
    </div>
  );
};

export default ChatBot;
