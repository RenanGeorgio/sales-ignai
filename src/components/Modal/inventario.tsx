import React, { useState } from 'react';
import link from '../Image/link.svg';
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
            <img src={link} alt="Estoque" className='inventario-button-img' />
            Estoque
          </button>
          <button
            className={selectedButton === 'Enviar' ? 'selected' : ''}
            onClick={() => handleButtonClick('Enviar')}
          >
            <img src={link} alt="Enviar" className='inventario-button-img' />
            Enviar
          </button>
          <button
            className={selectedButton === 'Delivery' ? 'selected' : ''}
            onClick={() => handleButtonClick('Delivery')}
          >
            <img src={link} alt="Delivery" className='inventario-button-img'/>
            Delivery
          </button>
          <button
            className={selectedButton === 'Atributor' ? 'selected' : ''}
            onClick={() => handleButtonClick('Atributor')}
          >
            <img src={link} alt="Atributor" className='inventario-button-img'/>
            Atributor
          </button>
          <button
            className={selectedButton === 'Avançado' ? 'selected' : ''}
            onClick={() => handleButtonClick('Avançado')}
          >
            <img src={link} alt="Avançado" className='inventario-button-img' />
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
