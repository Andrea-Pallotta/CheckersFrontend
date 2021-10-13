import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import {
  LH_SOCKET_URL,
  NEW_GLOBAL_CHAT_MESSAGE,
  USER_JOIN_CHAT_EVENT,
  USER_LEAVE_CHAT_EVENT,
} from "../../../Api/endpoints";
import axios from "axios";

const ChatRoomHandler = ({ roomId, user }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        `${LH_SOCKET_URL}/rooms/${roomId}/users`
      );
      const result = response.data.users;
      setUsers(result);
    };
    fetchUsers();
  }, [roomId]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        `${LH_SOCKET_URL}/rooms/${roomId}/messages`
      );
      const result = response.data.messages;
      setMessages(result);
    };
    fetchMessages();
  }, [roomId]);

  useEffect(() => {
    if (!user) {
      console.log('user', user)
      return;
    }

    socketRef.current = io(LH_SOCKET_URL, {
      query: { roomId, name: user.username },
    });

    socketRef.current.on("connect", () => {
      console.log(socketRef.current.id);
    });

    socketRef.current.on(USER_JOIN_CHAT_EVENT, (user) => {
      if (user.id === socketRef.current.id) return;
      setUsers((users) => [...users, user]);
    });

    socketRef.current.on(USER_LEAVE_CHAT_EVENT, (user) => {
      setUsers((users) => users.filter((_user) => _user.id !== user.id));
    });

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
  }, [roomId, user]);

  const sendMessage = (message) => {
    if (!socketRef.current) return;
    socketRef.current.emit(NEW_GLOBAL_CHAT_MESSAGE, {
      body: message,
      senderId: socketRef.current.id,
      user: user,
    });
  };

  return {
    messages,
    sendMessage,
    users,
  };
};

export default ChatRoomHandler;
