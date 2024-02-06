import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import usersImage from '../../components/Image/users.svg';
import sino from '../../components/Image/bell.svg';
import fileTextImage from '../../components/Image/file-text.svg';
import '../../styles/forms.css'; 

import Layout from '../../components/Layout/ChatLayout';
import History from '../../components/Layout/HistoryLayout';

import GraphChat from '../../components/Graph/GraphChat';
import GraphTicket from '../../components/Graph/GraphTicket';
import GraphTicketYou from '../../components/Graph/GraphTicketYou';
import GraphThemes from '../../components/Graph/GraphThemes';


const Chat: React.FC = () => {
  const [activePage, setActivePage] = useState('Formulário'); 

  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };

  return (
    <div style={{overflow:'hidden'}} >
      <Navbar />
      <h1 className="title">Chat</h1>
      <div style={{marginLeft:'100px'}}>
        <button
          className={activePage === 'Atendimento' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Atendimento')}
        >
          <img src={usersImage} alt="Users" />
          Atendimento
        </button>
        <button
          className={activePage === 'Histórico' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Histórico')}
        >
          <img src={sino} alt="Link" />
          Histórico
        </button>
        <button
          className={activePage === 'Painel' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Painel')}
        >
          <img src={fileTextImage} alt="File Text" />
          Painel
        </button>
      </div>
      <div>
      {activePage === 'Atendimento' && (
        <div >
          <Layout props={undefined}/>
        </div>
      )}
      {activePage === 'Histórico' && (
        <>
          <History />
        </>
      )}
      {activePage === 'Painel' && (
        <>
          <div className='graph-row'>
            <GraphChat />
            <GraphTicket data={[50, 30, 20, 10]}/>
          </div>
          <div className='graph-row'>
            <GraphThemes month={''} />
            <GraphTicketYou data={[50, 30, 20, 10]}/>
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default Chat;
