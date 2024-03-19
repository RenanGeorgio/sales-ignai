import { cloneElement, useEffect, useState } from "react";
import "./ModalForm.css";

interface ModalFormProps {
  children: any;
  onSubmit: (formValues: any) => void;
  isLoading: boolean;
  initialValues: any;
  mode: string;
} 

const ModalForm = ({ children, onSubmit, isLoading, initialValues, mode }: ModalFormProps) => {


  const [formValues, setFormValues] = useState({});
  const [disabled, setDisabled] = useState(true);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

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
    mode,
  });

  return (
    <div className="modal-form">
      <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => onChange(e)}>
        <div className="form-content">{newElement}</div>
        <button
          type="submit"
          className="form-submit-button"
          disabled={disabled}
        >
          {mode === "edit" ? "Atualizar" : "Adicionar"}
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
