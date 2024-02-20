import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import usersImage from '../../components/Image/users.svg';
import sino from '../../components/Image/bell.svg';
import fileTextImage from '../../components/Image/file-text.svg';
import '../../styles/forms.css'; 
import MainForm from '../../components/Forms/MainForm';
import FormSelector from '../../components/Forms/FormSelector';
import Footer from '../../components/Forms/Footer';
// import ButtonPath from '../../components/Forms/ButtonPath';
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
      <div style={{marginLeft:'100px'}}>
        <button
          className={activePage === 'Formulário' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Formulário')}
        >
          <img src={usersImage} alt="Users" />
          Formulário
        </button>
        <button
          className={activePage === 'Contador' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Contador')}
        >
          <img src={sino} alt="Link" />
          Contador
        </button>
        <button
          className={activePage === 'Painel' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Painel')}
        >
          <img src={fileTextImage} alt="File Text" />
          Painel
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
          <MainForm />
          <FormSelector />
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
          <Footer />
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
