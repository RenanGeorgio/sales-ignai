import "@styles/business.module.css";

const OrganizeModal: React.FC = () => {
  return (
    <div className="business-modal-organize-container">
      <div className="business-modal-header">
        <h2>Organize</h2>
      </div>
      <div className="business-modal-content-organize">
        <label>Fornecedor</label>
        <select>
          <option value="" disabled selected>
            Selecione o fornecedor
          </option>
          <option value="fornecedor1">Fornecedor 1</option>
          <option value="fornecedor2">Fornecedor 2</option>
        </select>
        <div className="container-select-organize">
          <label>Categoria</label>
          <span>Adicionar</span>
        </div>
        <select>
          <option value="" disabled selected>
            Selecione a categoria
          </option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
        </select>
        <label>Setor</label>
        <select>
          <option value="" disabled selected>
            Setor
          </option>
          <option value="setor1">Setor 1</option>
          <option value="setor2">Setor 2</option>
        </select>
        <label>Status</label>
        <select>
          <option value="" disabled selected>
            Status
          </option>
          <option value="status1">Status 1</option>
          <option value="status2">Status 2</option>
        </select>
        <label>Tags</label>
        <input type="text" placeholder="Tags" />
      </div>
    </div>
  );
}

export default OrganizeModal;