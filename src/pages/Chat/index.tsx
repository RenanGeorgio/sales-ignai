import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { BellIcon, FileTextIcon, UsersIcon } from '../../components/Image/icons';
import '../../styles/forms.css';
import Layout from '../../components/Layout/ChatLayout';
import History from '../../components/Layout/HistoryLayout';
import GraphChat from '../../components/Graph/GraphChat';
import GraphTicket from '../../components/Graph/GraphTicket';
import GraphTicketYou from '../../components/Graph/GraphTicketYou';
import GraphThemes from '../../components/Graph/GraphThemes';


const Chat: React.FC = () => {
  const [activePage, setActivePage] = useState('Atendimento');

  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };

  return (
    <div style={{ overflow: 'hidden' }} className="page-content" >
      <Navbar />
      <h1 className="titleChat">Chat</h1>
      <div style={{ margin: '0 0 10px 95px', display: 'flex' }}>
        <button
          className={activePage === 'Atendimento' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Atendimento')}
        >
          <UsersIcon />
          Atendimento
        </button>
        <button
          className={activePage === 'Histórico' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Histórico')}
        >
          <BellIcon />
          Histórico
        </button>
        <button
          className={activePage === 'Painel' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Painel')}
        >
          {/* <img src={fileTextImage} alt="File Text" /> */}
          <FileTextIcon />
          Painel
        </button>
      </div>
      <div>
        {activePage === 'Atendimento' && (
          <div >
            <Layout props={undefined} />
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
              <GraphTicket data={[50, 30, 20, 10]} />
            </div>
            <div className='graph-row'>
              <GraphThemes month={''} />
              <GraphTicketYou data={[50, 30, 20, 10]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
