import useChat from "@hooks/useChat";
import { useFetchRecipient } from "@hooks/useFetchRecipient";
import { OnlineUser, Consumer } from "@types";
import Avatar2 from "@assets/images/Avatar2.png";
import web from "@assets/images/web.svg";
import { FacebookIcon, InstagramIcon, TelegramIcon, WhatsappIcon } from "@icons";
import "./leftmenu.module.scss";

interface Props {
  chat: any;
  user: Consumer;
};

export const UserChat = ({ chat, user }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className="messageBubble">
    <div className="avatarWithName">
      <div className='imageName'>
      <img src={Avatar2} alt="Avatar" className="avatar-client" />
      <div className="name">{ `${recipientUser?.name} ${recipientUser?.lastName}`}</div>
      </div>
      <div className={isOnline ? "online" : "offline"}></div>
    </div>
    <div className="messageDetails">
      <div className="companyName">Fazenda Minas Pro</div>
      {/* <div className="time">1 Minute</div> */}
    </div>
    <div className="messageLogo">{ getChatIcon() }</div>
  </div>
  );
}