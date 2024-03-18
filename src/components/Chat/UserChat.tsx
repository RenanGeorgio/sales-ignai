import useChat from "@hooks/useChat";
import { useFetchRecipient } from "@hooks/useFetchRecipient";
import { OnlineUser, Consumer } from "@types";
import Avatar2 from "@assets/images/Avatar2.png";
import web from "@assets/images/web.svg";  
import { FacebookIcon, InstagramIcon, TelegramIcon, WhatsappIcon } from "@icons";
import "./leftmenu.css";

interface Props {
  chat: any;
  user: Consumer;
};

export const UserChat = ({ chat, user }: Props) => {
  const { recipientUser, error } = useFetchRecipient(chat, user);  
  
  const { onlineUsers } = useChat();
  
  const isOnline = onlineUsers?.some((onlineUser: OnlineUser) => onlineUser.userId === recipientUser?._id);

  const origin = chat?.origin.platform;
  
  const getChatIcon = () => {
    switch (origin) {
      case "facebook":
        return <FacebookIcon />;
      case "instagram":
        return <InstagramIcon />;
      case "telegram":
        return <TelegramIcon />;
      case "web":
        return  <img src={web} style={{width: '30px', height:'30px'}}/>
      case "whatsapp":
        return <WhatsappIcon />;
      default:
        return <WhatsappIcon />;
    }
  };

  return (
    <div className="list">
      <img src={Avatar2} alt="Avatar" className="avatar-client" />
      <div className="text-2">
        <div className="list-icon-chat">
          { getChatIcon() }
        </div>
        <div className="namr-time">
          <div className="text-wrapper-4">{ `${recipientUser?.name} ${recipientUser?.lastName}`}</div>
          <div className="text-wrapper-5">{isOnline ? "online" : "offline"}</div>
        </div>
        <div className="text-wrapper-6"></div>
      </div>
    </div>
  );
}