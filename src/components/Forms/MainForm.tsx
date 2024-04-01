import "@styles/forms.scss";

const MainForm: React.FC = () => {
  return (
    <div className="container">
        <form className="form-container">
          <div className="form-row">
            <label>Primeiro nome</label>
            <input type="text" placeholder="John" />
            <label>Email</label>
            <input type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className="form-row">
            <label>Último nome</label>
            <input type="text" placeholder="Doe" />
            <label>Organização</label>
            <input type="text" placeholder="PIXINVENT" />
          </div>
          <div className="form-row">
            <label>Número de telefone</label>
            <input type="tel" placeholder="674 758 7365" />
            <label>Estado</label>
            <input type="text" placeholder="California" />
          </div>
          <div className="form-row">
            <label>Endereço</label>
            <input type="text" placeholder="Endereço" />
            <label>CEP</label>
            <input type="text" placeholder="34753" />
          </div>
          <div className="form-row">
            <label>País</label>
            <select>
              <option value="pais">USA</option>
            </select>
            <label>Fuso horário</label>
            <select>
              <option value="fuso" >Fuso horário</option>
            </select>
          </div>
          <div className="form-row">
            <label>Idioma</label>
            <input type="text" placeholder="English" />
            <label>Moeda</label>
            <select>
              <option value="moeda">Moeda</option>
            </select>
          </div>
          <button className="send-button">Enviar</button>
        </form>
    </div>
  );
}

export default MainForm;