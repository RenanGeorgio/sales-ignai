import React from 'react';
import '../../styles/graph.css'; 
import setaVerde from '../../components/Image/chevron-up.svg';
import setaVermelha from '../../components/Image/chevron-down.svg';
import packageImg from '../../components/Image/package.svg';
import truck from '../../components/Image/truck.svg';
import circle from '../../components/Image/circle-check.svg';
import percentage from '../../components/Image/percentage.svg';
import clock from '../../components/Image/clock.svg';
import users from '../../components/Image/users-red.svg';

interface GraphThemesProps {
  month: string;
}
  
const GraphThemes: React.FC<GraphThemesProps> = ({ month }) => {
  return (
    <div className="graph-container-themes">
      <h3 className="graph-title">Temas de atendimento</h3>
      <h4 className='graph-subtitle'>12% increase in this month</h4>
      <div className="menu-icon-themes">&#8942;</div>
      <div className="data-row-themes">
        <div className="data-item">
          <img src={packageImg} alt="Google" className="avatar-img" />
          <span className="data-text">Problemas com pedido</span>
          <div className="percentage-container">
            <img src={setaVerde}></img>
            <h4>25.8%</h4>
          </div>
          <span className="data-number">200</span>
        </div>
      </div>
      <div className="data-row-themes">
        <div className="data-item">
          <img src={truck} alt="Facebook" className="avatar-img" />
          <span className="data-text">Problemas com transporte</span>
          <div className="percentage-container">
            <img src={setaVerde}></img>
            <h4>4.3%</h4>
          </div>
          <span className="data-number">150</span>
        </div>
      </div>
      <div className="data-row-themes">
        <div className="data-item">
          <img src={circle} alt="Instagram" className="avatar-img" />
          <span className="data-text">Pedido entregue no prazo</span>
          <div className="percentage-container">
            <img src={setaVermelha}></img>
            <h4>12.5%</h4>
          </div>
          <span className="data-number">100</span>
        </div>
      </div>
      <div className="data-row-themes">
        <div className="data-item">
          <img src={percentage} alt="LinkedIn" className="avatar-img" />
          <span className="data-text">Preço do produto</span>
          <div className="percentage-container">
            <img src={setaVerde}></img>
            <h4>35.6%</h4>
          </div>
          <span className="data-number">95</span>
        </div>
      </div>
      <div className="data-row-themes">
        <div className="data-item">
          <img src={clock} alt="LinkedIn" className="avatar-img" />
          <span className="data-text">Tempo de entrega</span>
          <div className="percentage-container">
            <img src={setaVermelha}></img>
            <h4>2.15%</h4>
          </div>
          <span className="data-number">20</span>
        </div>
      </div>
      <div className="data-row-themes">
        <div className="data-item">
          <img src={users} alt="LinkedIn" className="avatar-img" />
          <span className="data-text">Satisfação do cliente</span>
          <div className="percentage-container">
            <img src={setaVerde}></img>
            <h4>5.7%</h4>
          </div>
          <span className="data-number">20</span>
        </div>
      </div>
    </div>
  );
};

export default GraphThemes;
