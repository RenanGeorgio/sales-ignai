import { AvatarGreenIcon } from "@icons";
import "@styles/dashboard.scss";

interface GraphNumberVisitProps {
  month: string;
}

const GraphNumberVisit: React.FC<GraphNumberVisitProps> = ({ month }) => {
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
          <AvatarGreenIcon/>
          <span className="data-text">Form 1</span>
          <span className="data-number">33</span>
        </div>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <AvatarGreenIcon/>
          <span className="data-text">Form 2</span>
          <span className="data-number">30</span>
        </div>
      </div>
      <div className="data-row-4">
        <div className="data-item">
          <AvatarGreenIcon/>
          <span className="data-text">Form 3</span>
          <span className="data-number">12</span>
        </div>
      </div>
    </div>
  );
}

export default GraphNumberVisit;