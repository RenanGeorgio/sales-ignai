import { cloneElement, useEffect, useState } from "react";
import "./ModalForm.css";

const ModalForm = ({ children, onSubmit, isLoading, initialValues, mode }) => {
  const [formValues, setFormValues] = useState({});
  const [disabled, setDisabled] = useState(true);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value; // Trata a checkbox separadamente

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  useEffect(() => {
    setDisabled(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (mode === "edit") {
      setFormValues(initialValues);
    }
  }, [initialValues, mode]);

  const newElement = cloneElement(children, {
    formValues,
    mode
  });

  return (
    <div className="modal-form">
      <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => onChange(e)}>
        {newElement}
        <button
          type="submit"
          className="form-submit-button"
          disabled={disabled}
        >
          {mode === "edit" ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
