import { useState } from "react";
import { ChatBox } from "../../Chat/ChatBox";
import { LeftMenu } from "../../Chat/LeftMenu";
import { UserChat } from "../../Chat/UserChat";
import useAuth from "@hooks/useAuth";
import useChat from "@hooks/useChat";
import "./ChatLayout.module.css";

export default function LayoutChat() {
  const [showAddTicket, setShowAddTicket] = useState<boolean>(false);

  const { user } = useAuth();
  const { userChats, updateCurrentChat } = useChat();

  const toggleAddTicket = () => {
    setShowAddTicket(!showAddTicket);
  };

  return (
    <div className="wrapp">
      <div className="side">
        <LeftMenu onAddTicketClick={toggleAddTicket}>
          <div className="heading-2">
            <div className="text-wrapper-3">Clientes</div>
          </div>
          <div className="div-content">
            {userChats?.map((chat: any, index: string | number) => (
              <div
                key={index}
                onClick={() => {
                  updateCurrentChat(chat);
                }}
              >
                <UserChat
                  chat={chat}
                  user={user}
                />
              </div>
            ))}
          </div>
        </LeftMenu>
      </div>
      <div className="content">
        <ChatBox toggleAddTicket={showAddTicket} />
      </div>
    </div>
  );
}