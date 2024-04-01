import progress from "@assets/images/progress.svg";
import progressBrave from "@assets/images/ProgressBrave.svg";
import progressExplorer from "@assets/images/ProgressExplorer.svg";
import progressFirefox from "@assets/images/ProgressFirefox.svg";
import progressOpera from "@assets/images/ProgressOpera.svg";
import progressSafari from "@assets/images/ProgressSafari.svg";
import chrome from "@assets/images/chrome.png";
import safari from "@assets/images/safari.png";
import operaMini from "@assets/images/opera-mini.png";
import internetExplorer from "@assets/images/internet-explorer.png";
import firefox from "@assets/images/firefox.png";
import braveLogo from "@assets/images/brave-logo.png";
import VueLogo from "@assets/images/VueLogo.png";
import sketchLogo from "@assets/images/sketchLogo.png";
import ReactIcon from "@assets/images/ReactIcon.png";
import laravelLogo from "@assets/images/laravel-logo.png";
import BootStrapLogo from "@assets/images/BootstrapLogo.png";
import ChartProjectStatus from "../Graph/GraphProjectStatus";
import { CurrencyDollarIcon } from "@icons";
import "@styles/statistics-status.scss";

interface StatisticsStatusProps {}

const StatisticsStatus: React.FC<StatisticsStatusProps> = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-section">
        <h3 className="title-status">Browser States</h3>
        <div className="menu-icon">&#8942;</div>
        <p className="subtitle-status">Counter 2022</p>
        <div className="content-row">
          <div className="content-item">
            <img src={chrome} alt="Chrome" />
            <p>Chrome</p>
            <span className="content-porcentage-number">90%</span>
            <img src={progress} alt="Progresso Chrome" />
          </div>
        </div>
        <div className="content-row">
          <div className="content-item">
            <img src={safari} alt="Imagem 1" />
            <p>Safari</p>
            <span className="content-porcentage-number">80%</span>
            <img src={progressSafari} alt="Progresso Safari" />
          </div>
        </div>
        <div className="content-row">
          <div className="content-item">
            <img src={firefox} alt="Firefox" />
            <p>Firefox</p>
            <span className="content-porcentage-number">70%</span>
            <img src={progressFirefox} alt="Progresso Firefox" />
          </div>
        </div>
        <div className="content-row">
          <div className="content-item">
            <img src={operaMini} alt="Opera" />
            <p>Opera</p>
            <span className="content-porcentage-number">60%</span>
            <img src={progressOpera} alt="Progresso Opera" />
          </div>
        </div>
        <div className="content-row">
          <div className="content-item">
            <img src={internetExplorer} alt="Explorer" />
            <p>Explorer</p>
            <span className="content-porcentage-number">50%</span>
            <img src={progressExplorer} alt="Progresso Explorer" />
          </div>
        </div>
        <div className="content-row">
          <div className="content-item">
            <img src={braveLogo} alt="Brave" />
            <p>Brave</p>
            <span className="content-porcentage-number">40%</span>
            <img src={progressBrave} alt="Progresso Brave" />
          </div>
        </div>
      </div>
      <div className="dashboard-section">
        <h3>Project Status</h3>
        <div className="menu-icon">&#8942;</div>
        <div className="container-inicial-dollar">
          <div className="earnings-info">
            <CurrencyDollarIcon/>
            <div>
              <span>$4,3742</span>
              <p>Your Earnings</p>
            </div>
          </div>
          <ChartProjectStatus />
          <div className="container-footer">
            <div className="container-footer-item">
              <p className="footer-label">Donates</p>
              <div className="footer-amounts">
                <p>$756.26</p>
                <span className="red-percentage">-139.34</span>
              </div>
            </div>
          </div>
          <div className="container-footer-item">
            <p className="footer-label">Podcasts</p>
            <div className="footer-amounts">
              <p>$2,207.03</p>
              <span className="green-percentage">+576.24</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section">
        <h3>Active Projects</h3>
        <div className="menu-icon">&#8942;</div>
        <p className="subtitle-status">72 completed</p>
        <div className="content-row-3">
          <div className="content-item-3">
            <img src={laravelLogo} alt="Laravel" />
            <div className="container-info-row-3">
              <span>Laravel</span>
              <p>Exncunremtns</p>
            </div>
            <div className="progress-bar" ></div>
            <span className="content-porcentage-number">85%</span>
          </div>
        </div>
        <div className="content-row-3">
          <div className="content-item-3">
            <div className="container-info-row-3">
              <span>Figma</span>
              <p>App</p>
            </div>
            <div className="progress-bar" ></div>
            <span className="content-porcentage-number">86%</span>
          </div>
        </div>
        <div className="content-row-3">
          <div className="content-item-3">
            <img src={VueLogo} alt="Vue" />
            <div className="container-info-row-3">
              <span>Vue</span>
              <p>Calendar</p>
            </div>
            <div className="progress-bar" ></div>
            <span className="content-porcentage-number">90%</span>
          </div>
        </div>
        <div className="content-row-3">
          <div className="content-item-3">
            <img src={ReactIcon} alt="React" />
            <div className="container-info-row-3">
              <span>React</span>
              <p>Dashboard</p>
            </div>
            <div className="progress-bar" ></div>
            <span className="content-porcentage-number">37%</span>
          </div>
        </div>
        <div className="content-row-3">
          <div className="content-item-3">
            <img src={BootStrapLogo} alt="BootStrap" />
            <div className="container-info-row-3">
              <span>BootStrap</span>
              <p>Website</p>
            </div>
            <div className="progress-bar" ></div>
            <span className="content-porcentage-number">22%</span>
          </div>
        </div>
        <div className="content-row-3">
          <div className="content-item-3">
            <img src={sketchLogo} alt="Sketch" />
            <div className="container-info-row-3">
              <span>Sketch</span>
              <p>Website Design</p>
            </div>
            <div className="progress-bar"></div>
            <span className="content-porcentage-number">22%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsStatus;