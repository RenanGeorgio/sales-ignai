import "@styles/forms.module.css";

const ButtonPath: React.FC = () => {
  return (
    <div className="button-path-container">
      <div>
        <button className="yellowButton">Home</button>
      </div>
      <div className="blueButtonsContainer">
        <button className="blueButtonPath">Formulário 1</button>
        <button className="blueButtonPath">Formulário 2</button>
        <button className="blueButtonPath">Formulário 4</button>
        <button className="blueButtonPath">Formulário 5</button>
        <button className="blueButtonPath">Formulário 7</button>
      </div>
    </div>
  );
};

export default ButtonPath;
