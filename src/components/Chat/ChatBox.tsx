import React, { useState } from "react";
import { Phone, Search, Video, DotsVertical, FaceBookIcon, InstagramIcon, TelegramIcon, WhatsAppIcon } from "../Image/icons";
import web from "../Image/web.svg";
import Avatar2 from "../Image/Avatar2.png"
import ListarMensagens from "./MessegerPayload";
import TextEnter from "./TextEnter";
import AddTicket from "./AddTicket/AddTicket";
import { IconButton } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import { useFetchRecipient } from "../../hooks/useFetchRecipient";
import "./chat.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export const ChatBox = ({ toggleAddTicket }): React.JSX.Element => {
  const [exibirAddTicket, setExibirAddTicket] = useState(false);
  const [showAddTicket, setShowAddTicket] = useState(false);

  const { user } = useAuth();

  const { currentChat, isMessagesLoading, messages, sendTextMessage } =
    useChat();

  const { recipientUser } = useFetchRecipient(currentChat, user);

  if (!recipientUser) return <p>Nenhuma conversa selecionada.</p>;

  const handleSendMessage = (textMessage, setTextMessage) => {
    sendTextMessage(textMessage, user, currentChat._id, setTextMessage);
  };

  const handleFileUpload = (file: any) => {
    // Faça algo com o arquivo recebido, se necessário
    console.log("Arquivo recebido em Treatment:", file);
  };

  const handleFileUploadPhoto = (file: any) => {
    // Faça algo com o arquivo recebido, se necessário
    console.log("Arquivo recebido em Treatment:", file);
  };

  if (isMessagesLoading) return <p>Carregando mensagens...</p>;
  console.log(dayjs(messages[0]?.createdAt).locale('pt-BR').format())

  const origin = currentChat?.origin.platform;

  const getChatIcon = () => {
    switch (origin) {
      case "facebook":
        return <FaceBookIcon />;
      case "instagram":
        return <InstagramIcon />;
      case "telegram":
        return <TelegramIcon />;
      case "web":
        return <img src={web} style={{width: '30px', height:'30px'}}/>
      case "whatsapp":
        return <WhatsAppIcon />;
      default:
        return "https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png";
    }
  };

  const getTextMessageAvatar = () => (
    <img
      className="img-avatar-message"
      alt="Text Avatar"
      src="https://c.animaapp.com/5uY2Jqwr/img/avatar-14@2x.png"
    />
  );
  
  const getMessageAvatar = () => (
    <img
      className="img-avatar-text"
      alt="Message Avatar"
      src={Avatar2}
    />
  );
  
  return (
    <div className="containerchat">
      <div className="header">
        <div className="initial-info">
          <img
            className="img-avatar"
            alt="Avatar"
            src={Avatar2}
          />
          <div className="name-time">
            <div className="text-wrapper-4">{`${recipientUser?.name} ${recipientUser?.lastName}`}</div>
            <div className="text-wrapper-5">1 Minute</div>
          </div>
          { getChatIcon() }
          <div className="name-work">
            <div>Fazenda Minas Pro</div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="rightContent">
            <IconButton className="img-4">
              <Phone />
            </IconButton>
            <IconButton className="img-4">
              <Video className={undefined} />
            </IconButton>
            <IconButton className="img-4">
              <Search className={undefined} />
            </IconButton>
            <IconButton className="img-4">
              <DotsVertical className={undefined} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="chat">
        {messages?.map((message: any, index: number) => (
          <div key={index} className={`message-wrapper`}>
            {message?.senderId === user?.companyId ? getTextMessageAvatar() : getMessageAvatar()}
            <div
              className={`${
                message?.senderId === user?.companyId ? "text" : "message"
              }`}
            >
              <p>{message?.text}</p>
            </div>
            <div className={`message-time ${message?.senderId === user?.companyId ? 'time-left' : 'time-right'}`}>
              <span>{dayjs().to(dayjs(message?.createdAt))}</span>
            </div>
          </div>
        ))}

      </div>
      {toggleAddTicket ? (
          <AddTicket
            onUploadFile={handleFileUpload}
            onSetShow={setShowAddTicket}
          />
        ) : (
          ""
        )}
        <TextEnter
          onUploadFilePhoto={handleFileUploadPhoto}
          onSendMessage={handleSendMessage}
        />
    </div>
  );
};
