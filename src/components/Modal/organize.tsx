// OrganizeModal.tsx
import React from 'react';
import '../../styles/business.css';

const OrganizeModal: React.FC = () => {
  return (
    <div className="business-modal-organize-container">
      <div className="business-modal-header">
        <h2>Organize</h2>
      </div>
      <div className="business-modal-content-organize">
        {/* Adicione aqui os inputs e selects conforme sua descrição */}
        <label>Fornecedor</label>
        <select>
          <option value="" disabled selected>
            Selecione o fornecedor
          </option>
          <option value="fornecedor1">Fornecedor 1</option>
          <option value="fornecedor2">Fornecedor 2</option>
          {/* Adicione mais fornecedores conforme necessário */}
        </select>

        <label>Categoria</label>
        <select>
          <option value="" disabled selected>
            Selecione a categoria
          </option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
          {/* Adicione mais categorias conforme necessário */}
        </select>

        <label>Setor</label>
        <select>
          <option value="" disabled selected>
            Selecione o Setor
          </option>
          <option value="setor1">Setor 1</option>
          <option value="setor2">Setor 2</option>
          {/* Adicione mais setores conforme necessário */}
        </select>

        <label>Status</label>
        <select>
          <option value="" disabled selected>
            Selecione o Status
          </option>
          <option value="status1">Status 1</option>
          <option value="status2">Status 2</option>
          {/* Adicione mais status conforme necessário */}
        </select>

        <label>Tags</label>
        <input type="text" placeholder="Adicionar Tags" />
      </div>
    </div>
  );
};

export default OrganizeModal;
