import React from 'react';
import '../../styles/forms.css';
import html from '../../components/Image/html.svg';
import css from '../../components/Image/css.svg';

const Footer: React.FC = () => {
  return (
    <div className="code-button-container">
        <h5>Exportar</h5>
        <div className="code-buttons">
          <button className="red-button">Gerar Código</button>
          <img src={html} alt="HTML" className="export-image" />
          <img src={css} alt="CSS" className="export-image" />
        </div>
    </div>
  );
};

export default Footer;
