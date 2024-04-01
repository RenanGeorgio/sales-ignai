import { createContext, useCallback, useEffect, useState } from "react";
import {
  baseUrl,
  postRequest,
  getRequest,
} from "../../services/api/apiService";
import useAuth from "../../hooks/useAuth";
import { io } from "socket.io-client";
import { OnlineUser } from "../../types";
import Cookies from "js-cookie";
import compareArrays from "helpers/compareArrays";

export const ChatContext = createContext<any>(null);

export const ChatProvider = ({ children }: any) => {
  const [userChats, setUserChats] = useState<any>(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState<boolean>(false);
  const [userChatsError, setUserChatsError] = useState<string | null>(null);
  const [potentialChats, setPotentialChats] = useState<any>(null);
  const [currentChat, setCurrentChat] = useState<any>(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [messages, setMessages] = useState<any>(null);
  const [textMessageError, setTextMessageError] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState<{}>({} as any);
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);

  const [socket, setSocket] = useState<any>(null);

  const { user } = useAuth();

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_SERVER_API as string, {
      auth: {
        token: "Bearer " + Cookies.get("token"),
      },
      extraHeaders: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (socket === null) return;
    socket.emit("addNewUser", user?.companyId);
    socket.on("onlineUsers", (users: any) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("onlineUsers");
    };
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    const recipientId = currentChat?.members?.find(
      (id: string) => id !== user?.companyId
    );

    socket.emit("sendMessage", { ...newMessage, recipientId });
  }, [newMessage]);

  useEffect(() => {
    if (!socket) return;
    socket.on("getMessage", (res: any) => {
      if (currentChat?._id !== res.chatId) return;
      setMessages((prev) => [...prev, res]);
    });

    return () => {
      socket.off("getMessage");
    };
  }, [socket, currentChat]);

  useEffect(() => {
    if (socket === null) return;
    socket.on("newUserChat", (client: any) => {
      const isChatCreated = userChats?.some((chat) =>
        compareArrays(chat.members, client.members)
      );

      if (isChatCreated) return;

      setUserChats((prev: any) => [...prev, client]);
    });
    
    return () => {
      socket.off("newUserChat");
    };
  }, [socket]);

  useEffect(() => {
    if (!userChats) return;
    const getClients = async () => {
      const response = await getRequest(`${baseUrl}/api/chat/clients`);

      if (response.error) {
        return setUserChatsError(response);
      }
      const pChats = response?.filter((client: any) => {
        let isChatCreated = false;

        if (!user?._id === client?._id) return false;

        if (userChats) {
          isChatCreated = userChats?.some((chat: any) =>
            chat.members.includes(client._id)
          );
        }

        return !isChatCreated;
      });
      setPotentialChats(pChats);
    };

    getClients();
  }, [userChats]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?.companyId) {
        setIsUserChatsLoading(true);
        const response = await getRequest(
          `${baseUrl}/api/chat/${user.companyId}`
        );
        if (response.error) {
          return setUserChatsError(response);
        } else {
          setUserChats(response);
        }
      }
    };

    getUserChats();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      setIsMessagesLoading(true);
      setMessageError(null);
      if (currentChat) {
        const response = await getRequest(
          `${baseUrl}/api/chat/message/${currentChat._id}`
        );
        setIsMessagesLoading(false);

        if (response.error) {
          setMessageError(response);
        }

        setMessages(response);
      }
    };

    getMessages();
  }, [currentChat]);

  const updateCurrentChat = useCallback((chat: any) => {
    setCurrentChat(chat);
  }, []);

  const sendTextMessage = useCallback(
    async (textMessage, sender, currentChatId, setTextMessage) => {
      if (textMessage === "") return;
      const response = await postRequest(`${baseUrl}/api/chat/message`, {
        text: textMessage,
        senderId: sender.companyId,
        chatId: currentChatId,
      });
      if (response.error) {
        return setTextMessageError(response);
      }
      setNewMessage(response);
      setMessages((prev) => [...prev, response]);
      setTextMessage("");
    },
    []
  );

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
        potentialChats,
        updateCurrentChat,
        currentChat,
        messages,
        isMessagesLoading,
        messageError,
        sendTextMessage,
        onlineUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
