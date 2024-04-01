import { FormEvent, cloneElement, useEffect, useState } from "react";
import "./ModalForm.module.scss";

interface ModalFormProps {
  children: any;
  onSubmit: (formValues: any) => void;
  isLoading: boolean;
  initialValues: any;
  mode: string;
}

const ModalForm = ({ children, onSubmit, isLoading, initialValues, mode }: ModalFormProps) => {
  const [formValues, setFormValues] = useState<any>({});
  const [disabled, setDisabled] = useState<boolean>(true);

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const { name, value, type, checked }: any = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    e.preventDefault();
    onSubmit(formValues);
  };

  const newElement = cloneElement(children, {
    formValues,
    mode,
  });

  useEffect(() => {
    setDisabled(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (mode === "edit") {
      setFormValues(initialValues);
    }
  }, [initialValues, mode]);

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
}

export default ModalForm;