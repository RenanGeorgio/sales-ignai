import React from 'react';
import Navbar from '../../components/Navbar';
import usersImage from '../../components/Image/users.svg';
import linkImage from '../../components/Image/link.svg';
import fileTextImage from '../../components/Image/file-text.svg';
import html from '../../components/Image/html.svg';
import css from '../../components/Image/css.svg';
import '../../styles/forms.css'; 
import MainForm from '../../components/Forms/MainForm';
import FormSelector from '../../components/Forms/FormSelector';

const Forms: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1 className="title">Formulários</h1>
      <div className="buttonContainer">
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
      <div className="code-button-container">
        <h5>Exportar</h5>
        <div className="code-buttons">
          <button className="red-button">Gerar Código</button>
          <img src={html} alt="HTML" className="export-image" />
          <img src={css} alt="CSS" className="export-image" />
        </div>
      </div>
    </div>
  );
};

export default Forms;