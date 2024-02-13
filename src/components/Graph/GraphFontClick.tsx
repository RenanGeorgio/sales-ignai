import React from 'react';
import '../../styles/dashboard.css'; 
import avatar from '../../components/Image/avatar.svg';

interface GraphFontClickProps {
  month: string;
}
  
const GraphFontClick: React.FC<GraphFontClickProps> = ({ month }) => {
  return (
    <div className="graph-container-4">
      <h3 className="graph-title">Fonte de clicks</h3>
      <div className="menu-icon">&#8942;</div>
      <div className="container-info">
        <h4>Páginas</h4>
        <h4>Clicks</h4>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <img src={avatar} alt="Google" className="avatar-img" />
          <span className="data-text">Google</span>
          <span className="data-number">33</span>
        </div>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <img src={avatar} alt="Facebook" className="avatar-img" />
          <span className="data-text">Facebook</span>
          <span className="data-number">30</span>
        </div>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <img src={avatar} alt="Instagram" className="avatar-img" />
          <span className="data-text">Instagram</span>
          <span className="data-number">12</span>
        </div>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <img src={avatar} alt="LinkedIn" className="avatar-img" />
          <span className="data-text">LinkedIn</span>
          <span className="data-number">8</span>
        </div>
      </div>
    </div>
  );
};

export default GraphFontClick;
