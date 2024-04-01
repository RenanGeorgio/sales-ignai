import React from 'react';
import '../../styles/business.css';
import { Switch } from '@mui/material';

const PrecoModal: React.FC = () => {
  return (
    <div className="business-modal-price-container">
      <div className="business-modal-header">
        <h2>Preço</h2>
      </div>
      <div className="business-modal-content-price">
        <div className='modal-price-form'>          
        <label>Preço base</label>
        <input type="text" placeholder="Preço" />
        </div>
        <div className='modal-price-form'>          
        <label>Preço de desconto</label>
        <input type="text" placeholder="Preço de desconto" />
        </div>
        {/* <div>          
        </div>
        <div>          
        </div> */}

        <div className="checkbox-container">
          <input type="checkbox" id="impostosInclusos" />
          <label htmlFor="impostosInclusos">Impostos inclusos no preço total</label>
        </div>

        <hr style={{ border: '1px solid #ccc', margin: '2px 0', width:'95%' }} />

        <div className="checkbox-container-footer">
          <h2>Em estoque</h2>
          <Switch  checked />
        </div>
      </div>
    </div>
  );
};

export default PrecoModal;
