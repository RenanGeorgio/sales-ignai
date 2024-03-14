import "./addContact.css";
import stateList from "../../../data/states.mock.json";
import { useState } from "react";

const AddContactForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className="modal-form">
      <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => onChange(e)}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="contactName"
            placeholder="Nome completo"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Insira um email válido"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Telefone</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="Insira um telefone válido"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">Estado</label>
          <select id="state" name="state" className="form-input-select">
            <option value="">Selecione...</option>
            {stateList.UF.map((state) => (
              <option key={state.sigla} value={state.nome}>
                {state.nome}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="form-submit-button">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddContactForm;
