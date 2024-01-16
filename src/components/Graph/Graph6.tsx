import React from 'react';
import '../../styles/dashboard.css'; 
import avatarGreen from '../../components/Image/avatar-green.svg';

interface GraphProps {
  month: string;
}
  
const Graph4: React.FC<GraphProps> = ({ month }) => {
  return (
    <div className="graph-container-4">
      <h3 className="graph-title">Números de visitas</h3>
      <div className="menu-icon">&#8942;</div>
      <div className="container-info">
        <h4>Páginas</h4>
        <h4>Clicks</h4>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <img src={avatarGreen} alt="Form 1" className="avatar-img" />
          <span className="data-text">Form 1</span>
          <span className="data-number">33</span>
        </div>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <img src={avatarGreen} alt="Form 2" className="avatar-img" />
          <span className="data-text">Form 2</span>
          <span className="data-number">30</span>
        </div>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <img src={avatarGreen} alt="Form 3" className="avatar-img" />
          <span className="data-text">Form 3</span>
          <span className="data-number">12</span>
        </div>
      </div>
    </div>
  );
};

export default Graph4;
