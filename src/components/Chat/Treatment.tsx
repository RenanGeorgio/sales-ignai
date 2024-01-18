import React, { useState } from "react";
import { Phone, Search, Video, DotsVertical } from "../Image/icons";
import ListarMensagens from "./MessegerPayload";
import TextEnter from "./TextEnter";
import AddTicket from "./AddTicket/AddTicket";

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

  return (
    <div className="containerchat">
      <div className="header">
        <div>
          <img className="img-2" alt="Whatsapp" src="https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png" />
        </div>
        <div className="rightContainer">
          <div className="rightContent">
            <div><Phone /></div>
            <div><Video className={undefined} /></div>
            <div><Search className={undefined} /></div>
            <div><DotsVertical className={undefined} /></div>
          </div>
        </div>
      </div>
      <div className="chat">
        {/* <AddTicket /> */}
        {toggleAddTicket ? <AddTicket onUploadFile={handleFileUpload} onSetShow={setShowAddTicket}/> :''}
        <TextEnter onEnviarMensagem={adicionarMensagem} />
      </div>
    </div>
  );
};
