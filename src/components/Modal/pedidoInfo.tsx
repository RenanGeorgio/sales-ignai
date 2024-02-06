import React from 'react';
import '../../styles/business.css';
import avatar from '../../components/Image/Avatar2.png';

const PedidoInfoModal: React.FC = () => {
    return (
        <div className="business-modal-container">
            <div className="business-modal-header">
                <h2>Informações do Produto</h2>
                <div className="business-modal-subheader">
                    <span>Assignados</span>
                    <div>
                        <img src={avatar} alt='Avatar' className="avatar-image" />
                    </div>
                </div>
            </div>
            <div className="business-modal-content">
                <label>Nome</label>
                <input type="text" placeholder="Título do produto" />
                <div className="sku-barcode-container">
                    <div className="sku-container">
                        <label>SKU</label>
                        <input type="text" style={{ width: '88%' }} placeholder="SKU"/>
                    </div>
                    <div className="barcode-container">
                        <label>Barcode</label>
                        <input type="text" placeholder="0123-4567" style={{ width: '88%' }} />
                    </div>
                </div>
                <label>Descrição</label>
                <textarea placeholder="Descrição do produto"></textarea>
            </div>
        </div>
    );
};

export default PedidoInfoModal;
