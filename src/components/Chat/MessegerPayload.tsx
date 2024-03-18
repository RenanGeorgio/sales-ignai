import { useState } from "react";

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

const ListarMensagens: React.FC = () => {
  const [mensagens, setMensagens] = useState<MensagemPayload[]>([]);

  // Função para adicionar uma nova mensagem ao estado
  const adicionarMensagem = (novaMensagem: MensagemPayload) => {
    setMensagens(prevMensagens => [...prevMensagens, novaMensagem]);
  };

  return (
    <div>
      <ul>
        {mensagens.map((mensagem, index) => (
          <Mensagem key={index} {...mensagem} />
        ))}
      </ul>
    </div>
  );
};

const Mensagem: React.FC<MensagemPayload> = ({ mensagem, nome }) => {
  return (
    <li>
      <p>
        {mensagem} -
        <small>
          <i> {nome}</i>
        </small>
      </p>
    </li>
  );
};

export default ListarMensagens;
