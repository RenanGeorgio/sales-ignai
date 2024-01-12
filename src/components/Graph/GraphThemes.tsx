import React from 'react';
import '../../styles/graph.css'; 
import avatar from '../../components/Image/avatar.svg';

interface GraphThemesProps {
  month: string;
}
  
const GraphThemes: React.FC<GraphThemesProps> = ({ month }) => {
  return (
    <div className="graph-container-themes">
      <h3 className="graph-title">Temas de atendimento</h3>
      <div className="menu-icon-themes">&#8942;</div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="Google" className="avatar-img" />
          <span className="data-text">Problemas com pedido</span>
          <span className="data-number">200</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="Facebook" className="avatar-img" />
          <span className="data-text">Problemas com transporte</span>
          <span className="data-number">150</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="Instagram" className="avatar-img" />
          <span className="data-text">Pedido entregue no prazo</span>
          <span className="data-number">100</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="LinkedIn" className="avatar-img" />
          <span className="data-text">Preço do produto</span>
          <span className="data-number">95</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="LinkedIn" className="avatar-img" />
          <span className="data-text">Tempo de entrega</span>
          <span className="data-number">20</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="LinkedIn" className="avatar-img" />
          <span className="data-text">Satisfação do cliente</span>
          <span className="data-number">20</span>
        </div>
      </div>
    </div>
  );
};

export default GraphThemes;
