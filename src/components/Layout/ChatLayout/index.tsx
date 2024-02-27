import React, { useState } from "react";
import { ChatBox, Treatment } from "../../Chat/ChatBox";
import { LeftMenu } from "../../Chat/LeftMenu";
import "./layout.css";
import { UserChat } from "../../Chat/UserChat";
import useAuth from "../../../hooks/useAuth";
import useChat from "../../../hooks/useChat";
import { useFetchRecipient } from "../../../hooks/useFetchRecipient";
import { OnlineUser } from "../../../types";

export default function LayoutChat() {
  const [showAddTicket, setShowAddTicket] = useState(false);
  const toggleAddTicket = () => {
    setShowAddTicket(!showAddTicket);
  };

  const { user } = useAuth();

  const {
    userChats,
    updateCurrentChat,
  } = useChat();

  return (
    <div className="wrapp">
      <div className="side">
        <LeftMenu onAddTicketClick={toggleAddTicket}>
          <div className="heading-2">
            <div className="text-wrapper-3">Clientes</div>
            {/* <ChevronDown1 className="icon-instance-node" /> */}
          </div>
          <div className="div-content">
            {userChats?.map((chat, index) => (
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
