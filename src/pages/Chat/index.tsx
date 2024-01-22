import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import usersImage from '../../components/Image/users.svg';
import sino from '../../components/Image/bell.svg';
import fileTextImage from '../../components/Image/file-text.svg';
// import { Treatment } from '../../components/Chat/Treatment';
import '../../styles/forms.css'; 

// import { LeftMenu } from '../../components/Chat/LeftMenu';
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
      <div className="buttonContainer">
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
      <div
      //  className='containerlayout'
      
       >
      {/* <LeftMenu/> */}
      {activePage === 'Atendimento' && (
        <div >
          {/* <h1 style={{marginLeft: '10%'}}>Atendimento</h1> */}
          {/* <Treatment/> */}
          <Layout props={undefined}/>
        </div>
      )}
      {activePage === 'Histórico' && (
        <>
          {/* <h1 style={{marginLeft: '10%'}}>Histórico</h1> */}
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
            <GraphThemes />
            <GraphTicketYou data={[50, 30, 20, 10]}/>
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default Chat;
