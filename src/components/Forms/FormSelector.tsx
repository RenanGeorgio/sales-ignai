import React from 'react';
import '../../styles/forms.css';
import label from '../../components/Image/label.svg';
import labelgreen from '../../components/Image/labelgreen.svg';

const FormSelector: React.FC = () => {
  return (
    <div className="new-form-selector-container">
      <div className="new-form-selector">
        <input type="number" className="new-form-selector-input" placeholder="Formulários salvos"  />
        <div className="new-form-selector-buttons">
          <button className="new-form-selector-button">
            <img src={label} alt="Label" className="label-image" />
            Formulário 1
          </button>
          <button className="new-form-selector-button">
            <img src={labelgreen} alt="Label" className="label-image" />
            Formulário 2
          </button>
          <button className="new-form-selector-button">
            <img src={label} alt="Label" className="label-image" />
            Formulário 3
          </button>
          <button className="new-form-selector-button">
            <img src={labelgreen} alt="Label" className="label-image" />
            Formulário 4
          </button>
          <button className="new-form-selector-button">
            <img src={label} alt="Label" className="label-image" />
            Formulário 5
          </button>
          <button className="new-form-selector-button">
            <img src={labelgreen} alt="Label" className="label-image" />
            Formulário 6
          </button>
          <button className="new-form-selector-button">
            <img src={label} alt="Label" className="label-image" />
            Formulário 7
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSelector;
