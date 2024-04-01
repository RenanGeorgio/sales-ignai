import html from "@assets/images/html.svg";
import css from "@assets/images/css.svg";
import "@styles/forms.scss";

const Footer: React.FC = () => {
  return (
    <div className="code-button-container">
        <h5>Exportar</h5>
        <div className="code-buttons">
          <button className="red-button">Gerar Código</button>
          <img src={html} alt="HTML" className="export-image" />
          <img src={css} alt="CSS" className="export-image" />
        </div>
    </div>
  );
};

export default Footer;