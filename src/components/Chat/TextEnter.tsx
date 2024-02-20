import React, { ChangeEvent, useState, useEffect } from 'react';
import './chat.css';
import { Mic, Photo } from '../Image/icons';
import { IconButton } from '@mui/material';

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

interface TextEnterProps {
  onEnviarMensagem: (mensagem: MensagemPayload) => void;
}

export default function TextEnter({ onEnviarMensagem,onUploadFilePhoto }) {
  const [mensagem, setMensagem] = useState<string>('');
  const handleFileUploadPhoto = (file) => {
    // Aqui você pode fazer algo com o arquivo, como enviar para o servidor
    console.log('Arquivo Imagem:', file);

    // Se você quiser notificar o componente Treatment sobre o upload, chame a função
    if (onUploadFilePhoto) {
      onUploadFilePhoto(file);
    }
  };

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
      <div className='wrapperTextEnter'>
        <div className='containertxt'>
          <div className='txtwrapp'>
            <textarea onChange={handleChange} cols={50} rows={2} wrap='ward' className='txt' value={mensagem} />
          </div>
          <div className='btncontainer'>
            <IconButton  className='icon'>
              <Mic className={undefined} />
            </IconButton>
            <IconButton onClick={handleFileUploadPhoto}  className='icon'>
              <Photo className={undefined} />
            </IconButton>
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
