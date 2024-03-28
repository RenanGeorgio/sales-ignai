import React from 'react';
import '../../styles/forms.css';
import { LabelGreenIcon, LabelIcon } from '../Image/icons';;


const FormSelector: React.FC = () => {
  return (
    <div className="new-form-selector-container">
      <div className="new-form-selector">
        <input type="number" className="new-form-selector-input" placeholder="Formulários salvos"  />
        <div className="new-form-selector-buttons">
          <div className="new-form-selector-button">
            <LabelIcon style={undefined}/>
            Formulário 1
          </div>
          <div className="new-form-selector-button">
            <LabelGreenIcon style={undefined} />
            Formulário 2
          </div>
          <div className="new-form-selector-button">
            <LabelIcon style={undefined}/>
            Formulário 3
          </div>
          <div className="new-form-selector-button">
            <LabelGreenIcon style={undefined} />
            Formulário 4
          </div>
          <div className="new-form-selector-button">
            <LabelIcon style={undefined}/>
            Formulário 5
          </div>
          <div className="new-form-selector-button">
            <LabelGreenIcon style={undefined} />
            Formulário 6
          </div>
          <div className="new-form-selector-button">
            <LabelIcon style={undefined}/>
            Formulário 7
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSelector;
