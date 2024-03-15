const ClientForm = (props: any) => {
  const { formValues, mode } = props;
  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome do cliente"
          className="form-input"
          required
          value={formValues?.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail do cliente"
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
          placeholder="Telefone do cliente"
          className="form-input"
          required
          value={formValues?.tel}
        />
      </div>
      <div className="form-group">
        <label htmlFor="sector">Setor</label>
        <input
          type="sector"
          id="sector"
          name="sector"
          placeholder="Setor do cliente"
          className="form-input"
          required
          value={formValues?.sector}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Prioridade</label>
        <select
          id="priority"
          name="priority"
          className="form-input"
          value={formValues?.priority}
        >
          <option value="">Selecione...</option>
          <option value="Low">Baixa</option>
          <option value="Medium">Média</option>
          <option value="High">Alta</option>
        </select>
      </div>
      {/* checkbox status */}
      {mode === "edit" && (
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="checkbox"
            id="status"
            name="status"
            className="form-input"
            checked={formValues?.status}
          />
        </div>
      )}
    </>
  );
};

export default ClientForm;
