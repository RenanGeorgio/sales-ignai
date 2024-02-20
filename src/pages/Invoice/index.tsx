import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import GraphChat from '../../components/Graph/GraphChat';
import GraphTicket from '../../components/Graph/GraphTicket';
import GraphThemes from '../../components/Graph/GraphThemes';
import GraphTicketYou from '../../components/Graph/GraphTicketYou';
import Invoices from '../../components/Layout/InvoiceLayout';
import dollar from '../../components/Image/file-dollar.svg';
import fileTextImage from '../../components/Image/file-text.svg';

interface InvoiceProps {}

const Invoice: React.FC<InvoiceProps> = () => {
 
  const [activePage, setActivePage] = useState('Fatura'); 
  
  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };
  
  return (
    <div style={{overflow:'hidden'}} className="page-content" >
      <Navbar />
      <h1 className="title">Faturamento</h1>
      <div style={{margin: '0 0 10px 95px'}}>
        <button
          className={activePage === 'Fatura' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Histórico')}
        >
          <img src={dollar} alt="Link" />
          Fatura
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
        {activePage === 'Fatura' && (
          <>
            <Invoices />
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
export default Invoice;