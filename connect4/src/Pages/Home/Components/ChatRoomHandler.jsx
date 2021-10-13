import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { LH_SOCKET_URL, NEW_GLOBAL_CHAT_MESSAGE } from "../../../Api/endpoints";

const ChatRoomHandler = () => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(LH_SOCKET_URL);
    socketRef.current.on(NEW_GLOBAL_CHAT_MESSAGE, (message) => {
      const newMessage = {
        ...message,
        isOwner: message.senderId === socketRef.current.id,
      };

      setMessages((messages) => [...messages, newMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    socketRef.current.emit(NEW_GLOBAL_CHAT_MESSAGE, {
      body: message,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default ChatRoomHandler;
