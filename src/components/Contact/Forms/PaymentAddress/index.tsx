import "./Form.css";
import { useEffect, useState } from "react";

const AddPaymentAddressForm = ({ onSubmit, isLoading }) => {
  const [formValues, setFormValues] = useState({});
  const [disabled, setDisabled] = useState(true);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  useEffect(() => {
    setDisabled(isLoading)
  }, [isLoading]);

  return (
    <div className="modal-form">
      <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => onChange(e)}>
        <div className="form-group">
          <label htmlFor="name">Nome para o endereço</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome do cliente"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Rua</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Rua ou Avenida"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sector">Numero</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Número"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">Bairro</label>
          <input
            type="text"
            id="district"
            name="district"
            placeholder="Bairro"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Cidade"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">Estado</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Estado"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">CEP</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="Cep"
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-submit-button" disabled={disabled}>
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddPaymentAddressForm;
