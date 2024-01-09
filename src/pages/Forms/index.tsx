import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import usersImage from '../../components/Image/users.svg';
import sino from '../../components/Image/bell.svg';
import fileTextImage from '../../components/Image/file-text.svg';
import '../../styles/forms.css'; 
import MainForm from '../../components/Forms/MainForm';
import FormSelector from '../../components/Forms/FormSelector';
import Footer from '../../components/Forms/Footer';

const Forms: React.FC = () => {
  const [activePage, setActivePage] = useState('Formulário'); // Estado para controlar a página ativa

  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };

  return (
    <div>
      <Navbar />
      <h1 className="title">Formulários</h1>
      <div className="buttonContainer">
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
          {/* Conteúdo da subpágina Formulário */}
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
          <Footer />
        </>
      )}
      {activePage === 'Contador' && (
        <>
          {/* Conteúdo da subpágina Flow Chart */}
          <div className="button-container">
            <button className="gray-button">Salvar</button>
            <button className="gray-button">Adicionar</button>
            <button className="gray-button">Editar</button>
            <button className="gray-button">Colorir</button>
            <button className="gray-button">Modelos</button>
          </div>
          <FormSelector />
          <div className='container-footer'>
            <Footer />
          </div>
        </>
      )}
      {activePage === 'Painel' && (
        <>
          {/* Conteúdo da subpágina Painel */}
        </>
      )}
    </div>
  );
};

export default Forms;
