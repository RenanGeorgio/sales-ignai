import "@styles/business.module.css";

const VariantesModal: React.FC = () => {
  return (
    <div className="business-modal-variantes-container">
      <div className="business-modal-header-v">
        <h2>Variantes</h2>
        <div className="variantes-header-subtitle">
          <h3>Opcionais</h3>
        </div>
      </div>
      <div className="business-modal-content-variantes">
        <div className="variantes-inputs">
          <div className="variantes-inputs-f">
            <select>
              <option value="pequeno">Tamanho</option>
              <option value="medio">Médio</option>
              <option value="grande">Grande</option>
            </select>
          </div>
          <div className="variantes-inputs-s">
            <input type="text" placeholder="Entrar" />
          </div>
        </div>
        <button>Adicionar outra opção</button>
      </div>
    </div>
  );
}

export default VariantesModal;