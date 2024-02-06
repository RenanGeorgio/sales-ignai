import React from 'react';
import '../../styles/business.css';

const PrecoModal: React.FC = () => {
  return (
    <div className="business-modal-price-container">
      <div className="business-modal-header">
        <h2>Preço</h2>
      </div>
      <div className="business-modal-content-price">
        <label>Preço base</label>
        <input type="text" placeholder="Preço" />
        <label>Preço de desconto</label>
        <input type="text" placeholder="Preço de desconto" />

        <div className="checkbox-container">
          <input type="checkbox" id="impostosInclusos" />
          <label htmlFor="impostosInclusos">Impostos inclusos no preço total</label>
        </div>

        <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />

        <div className="checkbox-container-footer">
          <h2>Em estoque</h2>
          <input type="checkbox" id="estoque" />
        </div>
      </div>
    </div>
  );
};

export default PrecoModal;
