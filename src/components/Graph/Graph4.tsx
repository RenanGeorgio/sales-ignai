// Graph4.tsx
import React from 'react';
import '../../styles/dashboard.css'; 
import avatar from '../../components/Image/avatar.svg';

interface GraphProps {
  month: string;
}
  
const Graph4: React.FC<GraphProps> = ({ month }) => {
  return (
    <div className="graph-container-4">
      <h3 className="graph-title">Fonte de clicks</h3>
      <div className="menu-icon">&#8942;</div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="Google" className="avatar-img" />
          <span className="data-text">Google</span>
          <span className="data-number">33</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="Facebook" className="avatar-img" />
          <span className="data-text">Facebook</span>
          <span className="data-number">30</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="Instagram" className="avatar-img" />
          <span className="data-text">Instagram</span>
          <span className="data-number">12</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-item">
          <img src={avatar} alt="LinkedIn" className="avatar-img" />
          <span className="data-text">LinkedIn</span>
          <span className="data-number">8</span>
        </div>
      </div>
    </div>
  );
};

export default Graph4;
