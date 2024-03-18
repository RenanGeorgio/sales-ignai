import { ChangeEvent, useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { MicIcon, PhotoIcon } from "@icons";
import "./chat.css";

interface Props {
  onSendMessage: (textMessage: string, setTextMessage: () => void) => void;
  onUploadFilePhoto: (file: any) => void;
};

export default function TextEnter({ onSendMessage, onUploadFilePhoto }: Props) {
  const [textMessage, setTextMessage] = useState<string>("");

  const handleFileUploadPhoto = (file: any) => {
    // Aqui você pode fazer algo com o arquivo, como enviar para o servidor
    console.log("Arquivo Imagem:", file);

    // Se você quiser notificar o componente Treatment sobre o upload, chame a função
    if (onUploadFilePhoto) {
      onUploadFilePhoto(file);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextMessage(e.currentTarget.value);
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
      <div className="wrapperTextEnter">
        <div className="containertxt">
          <div className="txtwrapp">
            <textarea
              onChange={handleChange}
              cols={50}
              rows={2}
              wrap="ward"
              className="txt"
              value={textMessage}
            />
          </div>
          <div className="btncontainer">
            <IconButton className="icon">
              <MicIcon className={undefined} />
            </IconButton>
            <IconButton onClick={handleFileUploadPhoto} className="icon">
              <PhotoIcon className={undefined} />
            </IconButton>
            <div className="btntxt">
              <button
                onClick={() => {
                  // @ts-ignore
                  onSendMessage(textMessage, setTextMessage);
                }}
                className="btntxt"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}