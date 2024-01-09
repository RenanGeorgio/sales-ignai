import React from 'react';
import Navbar from '../../components/Navbar';
import usersImage from '../../components/Image/users.svg';
import linkImage from '../../components/Image/link.svg';
import fileTextImage from '../../components/Image/file-text.svg';
import label from '../../components/Image/label.svg';
import html from '../../components/Image/html.svg';
import css from '../../components/Image/css.svg';
import '../../styles/forms.css'; 

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
      <div className="container">
        <form className="form-container">
          <div className="form-row">
            <label>Primeiro nome</label>
            <input type="text" placeholder="John" />
            <label>Email</label>
            <input type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className="form-row">
            <label>Último nome</label>
            <input type="text" placeholder="Doe" />
            <label>Organização</label>
            <input type="text" placeholder="PIXINVENT" />
          </div>
          <div className="form-row">
            <label>Número de telefone</label>
            <input type="tel" placeholder="674 758 7365" />
            <label>Estado</label>
            <input type="text" placeholder="California" />
          </div>
          <div className="form-row">
            <label>Endereço</label>
            <input type="text" placeholder="Endereço" />
            <label>CEP</label>
            <input type="text" placeholder="34753" />
          </div>
          <div className="form-row">
            <label>País</label>
            <select>
              <option value="pais">USA</option>
            </select>
            <label>Fuso horário</label>
            <select>
              <option value="fuso" >Fuso horário</option>
            </select>
          </div>
          <div className="form-row">
            <label>Idioma</label>
            <input type="text" placeholder="English" />
            <label>Moeda</label>
            <select>
              <option value="moeda">Moeda</option>
            </select>
          </div>
          <button className="blue-button">Enviar</button>
        </form>
      </div>
      <div className="new-form-selector-container">
        <div className="new-form-selector">
          <input type="number" className="new-form-selector-input" placeholder="Formulários salvos"  />
          <div className="new-form-selector-buttons">
            <button className="new-form-selector-button">
              <img src={label} alt="Label" className="label-image" />
              Formulário 1
            </button>
            <button className="new-form-selector-button">
              <img src={label} alt="Label" className="label-image" />
              Formulário 2
            </button>
            <button className="new-form-selector-button">
              <img src={label} alt="Label" className="label-image" />
              Formulário 3
            </button>
            <button className="new-form-selector-button">
              <img src={label} alt="Label" className="label-image" />
              Formulário 4
            </button>
            <button className="new-form-selector-button">
              <img src={label} alt="Label" className="label-image" />
              Formulário 5
            </button>
            <button className="new-form-selector-button">
              <img src={label} alt="Label" className="label-image" />
              Formulário 6
            </button>
            <button className="new-form-selector-button">
              <img src={label} alt="Label" className="label-image" />
              Formulário 7
            </button>
          </div>
        </div>
      </div>
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