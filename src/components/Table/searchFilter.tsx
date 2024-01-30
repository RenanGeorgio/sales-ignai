import React from 'react';
import '../../styles/leads.css';

const SearchFilter: React.FC = () => {
  return (
    <div className="filtro-busca">
      <div className="header-table-filter">
        <div className="titulo">Filtro de busca</div>
        <div className="selects-row">
            <select className="select">
            <option>Selecionar</option>
            <option>Status de lead no pipeline</option>
            </select>
            <select className="select">
            <option>Selecionar</option>
            <option>Origem do lead</option>
            </select>
            <select className="select">
            <option>Selecionar</option>
            <option>Colaborador responsável</option>
            </select>
        </div>
      </div>
      <div className="bottom-row">
        <div className="left-select">
            <select className="select">
                <option>10</option>
                <option>20</option>
            </select>
        </div>
        <div className="right-select">
            <select className="select-assignados">
              <option>Selecionar</option>
              <option>Assignados a mim</option>
            </select>
          <input type="text" placeholder="Buscar" className="buscar-input" />
          <button className="adicionar-btn">+ Adicionar</button>
        </div>
      </div>
      <table className="tabela">
        <thead>
          <tr>
            <th>Lead</th>
            <th>Lead Origem</th>
            <th>Empresa</th>
            <th>Histórico</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="caminho-da-imagem" alt="Imagem do Lead" />
              Marge Jacson Silva <br />
              marge@gmail.com
            </td>
            <td>Whatsapp</td>
            <td>Plantação GG</td>
            <td>
              <img src="caminho-da-imagem" alt="Histórico" />
              <img src="caminho-da-imagem" alt="Histórico" />
              <img src="caminho-da-imagem" alt="Histórico" />
            </td>
            <td>Contato Inicial</td>
            <td>
              <img src="caminho-do-icone-editar" alt="Editar" />
              <img src="caminho-do-icone-lixeira" alt="Excluir" />
              <img src="caminho-do-icone-pontos" alt="Mais Ações" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchFilter;
