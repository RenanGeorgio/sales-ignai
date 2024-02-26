import useChat from "../../hooks/useChat";
import { useFetchRecipient } from "../../hooks/useFetchRecipient";
import { OnlineUser } from "../../types";
import "./leftmenu.css";

export const UserChat = ({ chat, user }) => {
  const { recipientUser, error } = useFetchRecipient(chat, user);  
  
  const { onlineUsers } = useChat();

  const isOnline = onlineUsers?.some((onlineUser: OnlineUser) => onlineUser.userId === recipientUser?._id);

  return (
    <div className="list">
      <div className="text-2">
        <img
          className="img-2"
          alt="Whatsapp"
          src="https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png"
        />
        <div className="namr-time">
          <div className="text-wrapper-4">{ `${recipientUser?.name} ${recipientUser?.lastName}`}</div>
          <div className="text-wrapper-5">{isOnline ? "online" : "offline"}</div>
        </div>
        <div className="text-wrapper-6">Atraso no pedido</div>
      </div>
    </div>
  );
};
