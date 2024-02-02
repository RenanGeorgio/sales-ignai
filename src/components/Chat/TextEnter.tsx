// import React, { ChangeEvent,useState, useEffect,} from 'react';
// import './chat.css'
// import { Icon } from 'semantic-ui-react'
// import { Mic, Photo } from '../Image/icons'
// import ListarMensagens from './MessegerPayload';

// // import { appSocket } from '../../appSocket'


// interface MensagemPayload {
//   nome: string;
//   mensagem: string;
// }

// interface TextEnterProps {
//   onEnviarMensagem: (mensagem: MensagemPayload) => void;
// }
// interface State {
//     mensagem: string;
//   }

// export default function TextEnter({
//   onEnviarMensagem = ()=>{},
 

// }) {

//     const [mensagem, setMensagem] = useState<string>('');

//     const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//       console.log(`Novo texto: ${e.currentTarget.value}`);
//       setMensagem(e.currentTarget.value);
//     };
  
//     // const handleClick = () => {
//     //   console.log("Botão clicado");
//     //   appSocket.emit("nova-mensagem", {
//     //     nome: "Jefferson",
//     //     mensagem: mensagem
//     //   });
//     //   setMensagem('');
//     // };

//     const handleClick = () => {
//           // Envia a mensagem para o componente pai
//           onEnviarMensagem({
//             nome: "Jefferson",
//             mensagem: mensagem

//            });
//           setMensagem('');
//         };
      
  
//     useEffect(() => {
//       // Lógica para executar quando o componente monta (equivalente a componentDidMount)
//       // Por exemplo, pode ser usado para adicionar event listeners, etc.
//       return () => {
//         // Lógica para executar quando o componente desmonta (equivalente a componentWillUnmount)
//         // Por exemplo, pode ser usado para remover event listeners, etc.
//       };
//     }, []); // O array vazio como segundo argumento faz com que o useEffect seja executado apenas uma vez, semelhante ao componentDidMount.
  
  
//     return (
//       <>
//         <div className='wrapper'>
//             <div className='containertxt'>


//                 <div className='txtwrapp'>
//                     <textarea onChange={handleChange} cols={50} rows={2} wrap='ward' className='txt' value={mensagem}/>
//                 </div>

//                 <div className='btncontainer'>
//                     <button className='icon'>
//                         <Mic className/>
//                     </button>
//                     <button className='icon'>
//                         <Photo className/>
//                     </button>
//                     <div className='btntxt'>
//                         <button
//                          onClick={handleClick}
//                           className='btntxt'>Enviar</button>
//                     </div>
//                 </div>


//             </div>
//         </div>
//         </>
//     )
// }

// function onEnviarMensagem(arg0: { nome: string; mensagem: string; }) {
//   throw new Error('Function not implemented.');
// }

import React, { ChangeEvent, useState, useEffect } from 'react';
import './chat.css';
import { Mic, Photo } from '../Image/icons';

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

interface TextEnterProps {
  onEnviarMensagem: (mensagem: MensagemPayload) => void;
}

export default function TextEnter({ onEnviarMensagem }: TextEnterProps) {
  const [mensagem, setMensagem] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(`Novo texto: ${e.currentTarget.value}`);
    setMensagem(e.currentTarget.value);
  };

  const handleClick = () => {
    // Envia a mensagem para o componente pai
    onEnviarMensagem({
      nome: "Jefferson",
      mensagem: mensagem,
    });
    setMensagem('');
  };

  useEffect(() => {
    // Lógica para executar quando o componente monta (equivalente a componentDidMount)
    // Por exemplo, pode ser usado para adicionar event listeners, etc.
    return () => {
      // Lógica para executar quando o componente desmonta (equivalente a componentWillUnmount)
      // Por exemplo, pode ser usado para remover event listeners, etc.
    };
  }, []); // O array vazio como segundo argumento faz com que o useEffect seja executado apenas uma vez, semelhante ao componentDidMount.

  return (
    <>
      <div className='wrapper'>
        <div className='containertxt'>
          <div className='txtwrapp'>
            <textarea onChange={handleChange} cols={50} rows={2} wrap='ward' className='txt' value={mensagem} />
          </div>
          <div className='btncontainer'>
            <button className='icon'>
              <Mic className={undefined} />
            </button>
            <button className='icon'>
              <Photo className={undefined} />
            </button>
            <div className='btntxt'>
              <button onClick={handleClick} className='btntxt'>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
