import React from 'react';
import Navbar from '../../components/Navbar';
import { UsersIcon,FileTextIcon, LinkIcon } from '../../components/Image/icons';
import '../../styles/chatbot.css';

const ChatBot = () => {
  return (
    <div className="page-content">
      <Navbar />
      <h1 className='text'>Automação ChatBot</h1>
      <div>
        <div style={{marginLeft:'100px', display:'flex'}}>
          <button className="blueButton">
           <UsersIcon/>
            Estruturação
          </button>
          <button className="grayButton">
          <LinkIcon/>
            Flow Chart
          </button>
          <button className="grayButton">
            <FileTextIcon/>
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
