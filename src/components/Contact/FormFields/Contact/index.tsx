import stateList from "../../../../data/states.mock.json";

const ContactFormFields = (props: any) => {
  const { formValues, mode } = props;

  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="contactName"
          placeholder="Nome completo"
          className="form-input"
          required
          value={formValues?.contactName}
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
          value={formValues?.email}
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
          value={formValues?.tel}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">Estado</label>
        <select
          id="state"
          name="state"
          className="form-input"
          value={formValues?.state}
        >
          <option value="">Selecione...</option>
          {stateList.UF.map((state) => (
            <option key={state.sigla} value={state.nome}>
              {state.nome}
            </option>
          ))}
        </select>
      </div>
      {mode === "edit" && (
        <div className="form-group-check-box">
          <label htmlFor="status">Status</label>
          <input
            type="checkbox"
            id="status"
            name="status"
            className="form-input-check-box"
            checked={formValues?.status}
          />
        </div>
      )}
    </>
  );
};

export default ContactFormFields;
