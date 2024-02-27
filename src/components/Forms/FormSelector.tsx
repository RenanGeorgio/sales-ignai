import React from 'react';
import '../../styles/forms.css';
import { LabelGreenIcon, LabelIcon } from '../Image/icons';;


const FormSelector: React.FC = () => {
  return (
    <div className="new-form-selector-container">
      <div className="new-form-selector">
        <input type="number" className="new-form-selector-input" placeholder="Formulários salvos"  />
        <div className="new-form-selector-buttons">
          <button className="new-form-selector-button">
            <LabelIcon/>
            Formulário 1
          </button>
          <button className="new-form-selector-button">
            <LabelGreenIcon />
            Formulário 2
          </button>
          <button className="new-form-selector-button">
            <LabelIcon/>
            Formulário 3
          </button>
          <button className="new-form-selector-button">
            <LabelGreenIcon />
            Formulário 4
          </button>
          <button className="new-form-selector-button">
            <LabelIcon/>
            Formulário 5
          </button>
          <button className="new-form-selector-button">
            <LabelGreenIcon />
            Formulário 6
          </button>
          <button className="new-form-selector-button">
            <LabelIcon/>
            Formulário 7
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSelector;
