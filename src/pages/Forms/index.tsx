import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { FileTextIcon, UsersIcon, BellIcon } from '../../components/Image/icons';
import '../../styles/forms.css'; 
import MainForm from '../../components/Forms/MainForm';
import FormSelector from '../../components/Forms/FormSelector';
import Footer from '../../components/Forms/Footer';
import Dashboard from '../../components/Forms/Dashboard';

const Forms: React.FC = () => {
  const [activePage, setActivePage] = useState('Formulário'); 

  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };

  return (
    <div className="page-content">
      <Navbar />
      <h1 className="title">Formulários</h1>
      <div
      className='button-group-form'
      //  style={{marginLeft:'100px', display:'flex'}}
       >
        <button
          className={activePage === 'Formulário' ? 'blueButton-form' : 'grayButton-form'}
          onClick={() => handleButtonClick('Formulário')}
        >
          <UsersIcon/>
          <span>Formulário</span>
        </button>
        {/* <div style={{display:'inline-flex',}}>   */}
        <button
          className={activePage === 'Contador' ? 'blueButton-form' : 'grayButton-form'}
          onClick={() => handleButtonClick('Contador')}
        > 
          <BellIcon />
         <span>Contador</span> 
       
        </button>
           {/* </div> */}
        <button
          className={activePage === 'Painel' ? 'blueButton-form' : 'grayButton-form'}
          onClick={() => handleButtonClick('Painel')}
        >
          <FileTextIcon/>
          <span>Painel</span>
        </button>
      </div>
      {activePage === 'Formulário' && (
        <>
          <div className="button-container">
            <button className="gray-button">Salvar</button>
            <button className="gray-button">Adicionar</button>
            <button className="gray-button">Editar</button>
            <button className="gray-button">Colorir</button>
            <button className="gray-button">Modelos</button>
            <button className="gray-button">Importar (Figma / Adobe XD)</button>
          </div>
          <div style={{justifyContent:'space-between', display:'flex',gap:20,marginLeft:35}}>
          <MainForm />
          <FormSelector />
          </div>
          <div style={{marginTop: '100px'}}>
            <Footer />
          </div>
        </>
      )}
      {activePage === 'Contador' && (
        <>
          <div className="button-container">
            <button className="gray-button">Salvar</button>
            <button className="gray-button">Adicionar</button>
            <button className="gray-button">Editar</button>
            <button className="gray-button">Colorir</button>
            <button className="gray-button">Modelos</button>
          </div>
          <div className="contador-content">
          <div className="button-path-container">
            <div>
              <button className="yellowButton">Home</button>
            </div>
            <div className="blueButtonsContainer">
              <button className="blueButtonPath">Formulário 1</button>
              <button className="blueButtonPath">Formulário 2</button>
              <button className="blueButtonPath">Formulário 4</button>
              <button className="blueButtonPath">Formulário 5</button>
              <button className="blueButtonPath">Formulário 7</button>
            </div>
          </div>
          <div className="form-selector-contador">
            <FormSelector />
            </div>
          </div>
          {/* <Footer /> */}
        </>
      )}
      {activePage === 'Painel' && (
        <>
          <Dashboard />
        </>
      )}
    </div>
  );
};

export default Forms;
