// import React, { useState, useEffect } from 'react';


// interface MensagemPayload {
//   nome: string;
//   mensagem: string;
// }

//   interface State {
//     mensagens: MensagemPayload[];
//   }

// const ListarMensagens: React.FC = () => {
//   const [mensagens, setMensagens] = useState<MensagemPayload[]>([]);

//   useEffect(() => {
//     // Aqui você pode realizar qualquer lógica de busca ou carregamento das mensagens.
//     // Neste exemplo, estamos apenas definindo algumas mensagens iniciais.
//     setMensagens([
      
//     ]);
//   }, []); // O array vazio como segundo argumento faz com que o useEffect seja executado apenas uma vez, semelhante ao componentDidMount.

//   const renderMensagens = () => {
//     return mensagens.map((mensagem, index) => <Mensagem key={index} {...mensagem} />);
//   };

//   return <ul>{renderMensagens()}</ul>;
// };

// const Mensagem: React.FC<MensagemPayload> = ({ mensagem, nome }) => {
//   return (
//     <li>
//       <p>
//         {mensagem} -
//         <small>
//           <i> {nome}</i>
//         </small>
//       </p>
//     </li>
//   );
// };

// export default ListarMensagens;

import React, { useState } from 'react';

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
