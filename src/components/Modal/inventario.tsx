import React, { useState } from 'react';
import { LinkIcon } from '../Image/icons';
import '../../styles/business.css';


const InventarioModal: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('Estoque');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="business-modal-inventario-container">
      <div className="business-modal-content-inventario">
        <div className="inventario-buttons">
          <button
            className={selectedButton === 'Estoque' ? 'selected' : ''}
            onClick={() => handleButtonClick('Estoque')}
          >
            <LinkIcon />
            Estoque
          </button>
          <button
            className={selectedButton === 'Enviar' ? 'selected' : ''}
            onClick={() => handleButtonClick('Enviar')}
          >
            <LinkIcon />
            Enviar
          </button>
          <button
            className={selectedButton === 'Delivery' ? 'selected' : ''}
            onClick={() => handleButtonClick('Delivery')}
          >
            <LinkIcon/>
            Delivery
          </button>
          <button
            className={selectedButton === 'Atributor' ? 'selected' : ''}
            onClick={() => handleButtonClick('Atributor')}
          >
            <LinkIcon/>
            Atributor
          </button>
          <button
            className={selectedButton === 'Avançado' ? 'selected' : ''}
            onClick={() => handleButtonClick('Avançado')}
          >
            <LinkIcon/>
            Avançado
          </button>
        </div>
        
        <hr style={{ border: '1px solid #ccc', margin: '20px 0', marginLeft: '25px' }} />

        <div className="inventario-opcao">
          <h3>Opção</h3>
          <label>Verificar estoque:</label>
          <div className="inventario-input-container">
            <input type="text" placeholder="Código" />
            <button>Confirmar</button>
          </div>
          <div className="inventario-spans">
            <span>Produtos em estoque: 54</span>
            <span>Produtos já enviados: 54</span>
            <span>Último envio: 24th June, 2022</span>
            <span>Estoque total movimentado: 2.430</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventarioModal;
