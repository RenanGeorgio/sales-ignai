import { createContext, useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { baseUrl, postRequest, getRequest } from "../../utils/chatService";
import useAuth from "@hooks/useAuth";
import { OnlineUser, Consumer } from "@types";

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
  const [newMessage, setNewMessage] = useState<any>();
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [textMessageError, setTextMessageError] = useState<string | null>(null);

  const [socket, setSocket] = useState<any>(null);

  const { user } = useAuth();

  const updateCurrentChat = useCallback((chat: any) => {
    setCurrentChat(chat);
  }, []);

  const sendTextMessage = useCallback(async (textMessage: string, sender: Consumer, currentChatId: number | string, setTextMessage: any) => {
    if (textMessage === "") {
      return;
    }

    const response = await postRequest(`${baseUrl}/message`, {
      text: textMessage,
      senderId: sender.companyId,
      chatId: currentChatId,
    });

    if (response.error) {
      return setTextMessageError(response);
    }

    setNewMessage(response);
    setMessages((prev: any) => [...prev, response]);
    setTextMessage("");
  }, []);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_SERVER_API as string);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (socket === null) {
      return;
    }

    socket.emit("addNewUser", user?.companyId);
    
    socket.on("onlineUsers", (users: any) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("onlineUsers");
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  useEffect(() => {
    if (!socket) {
      return;
    }
    
    const recipientId = currentChat?.members?.find(
      (id: string) => id !== user?.companyId
    );
    
    socket.emit("sendMessage", { ...newMessage, recipientId });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMessage]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on("getMessage", (res: any) => {
      if (currentChat?._id !== res.chatId) {
        return;
      }

      setMessages((prev: any) => [...prev, res]);
    });

    return () => {
      socket.off("getMessage");
    };
  }, [socket, currentChat]);

  useEffect(() => {
    if (socket === null) {
      return;
    }

    socket.on("newUserChat", (user: any) => {
      setUserChats((prev: any) => [...prev, user]);
    });

    return () => {
      socket.off("newUserChat");
    };
  }, [socket]);

  useEffect(() => {
    if (!userChats) {
      return;
    }
    
    const getClients = async () => {
      const response = await getRequest(`${baseUrl}/clients`);

      if (response.error) {
        return setUserChatsError(response);
      }

      const pChats = response?.filter((client: any) => {
        let isChatCreated = false;

        if (!user?._id === client?._id) {
          return false;
        }

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userChats]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?.companyId) {
        setIsUserChatsLoading(true);

        const response = await getRequest(`${baseUrl}/chat/${user.companyId}`);

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
        const response = await getRequest(`${baseUrl}/message/${currentChat._id}`);

        setIsMessagesLoading(false);

        if (response?.error) {
          setMessageError(response);
        }

        setMessages(response);
      }
    };

    getMessages();
  }, [currentChat]);

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
}