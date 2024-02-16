import React, { useState } from "react";
import { Phone, Search, Video, DotsVertical } from "../Image/icons";
import ListarMensagens from "./MessegerPayload";
import TextEnter from "./TextEnter";
import AddTicket from "./AddTicket/AddTicket";
import { IconButton } from "@mui/material";

export const Treatment = ({toggleAddTicket}): React.JSX.Element => {

  const [exibirAddTicket, setExibirAddTicket] = useState(false);
  const [showAddTicket, setShowAddTicket] = useState(false);

  const adicionarMensagem = (novaMensagem: any) => {
    console.log("Mensagem recebida:", novaMensagem);
    // Implemente a lógica necessária para adicionar a nova mensagem ao estado de ListarMensagens
  };

  const handleFileUpload = (file: any) => {
    // Faça algo com o arquivo recebido, se necessário
    console.log('Arquivo recebido em Treatment:', file);
  };

  const handleFileUploadPhoto = (file: any) => {
    // Faça algo com o arquivo recebido, se necessário
    console.log('Arquivo recebido em Treatment:', file);
  };

  return (
    <div className="containerchat">
      <div className="header">
        <div>
          <img className="img-2" alt="Whatsapp" src="https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png" />
        </div>
        <div className="rightContainer">
          <div className="rightContent">
            <IconButton className='img-4'><Phone /></IconButton>
            <IconButton className='img-4'><Video className={undefined} /></IconButton>
            <IconButton className='img-4'><Search className={undefined} /></IconButton>
            <IconButton className='img-4'><DotsVertical className={undefined} /></IconButton>
          </div>
        </div>
      </div>
      <div className="chat">
        {toggleAddTicket ? <AddTicket onUploadFile={handleFileUpload} onSetShow={setShowAddTicket}/> :''}
        <TextEnter onUploadFilePhoto={handleFileUploadPhoto} onEnviarMensagem={adicionarMensagem} />
      </div>
    </div>
  );
};
