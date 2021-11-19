import React, { useState, useEffect, useContext } from "react";
import Chat from "../Chat/Chat";
import { useSnackbar } from "notistack";
import { SocketContext } from "../../components/API/socket";
import { CircularProgress } from "@mui/material";
import ErrorBoundary from "../Error/ErrorBoundary";
import { UserContext } from "../../components/API/user";

export default function Home() {
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const socket = useContext(SocketContext);
  const user = useContext(UserContext);

  const handleSendMessage = (message) => {
    console.log("send message called");
    if (message.trim().length > 0) {
      socket.emit("send-global-message", {
        author: user.username,
        content: message,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      });
    } else {
      enqueueSnackbar("Cannot send an empty message", {
        variant: "warning",
      });
    }
  };

  useEffect(() => {
    const joinPublicChat = () => {
      socket.emit("join-public-chat", user.username);
    };
    socket.on("connection", (id) => {
      user["socketId"] = id;
      enqueueSnackbar("Connected to the socket", {
        variant: "success",
      });
      joinPublicChat();
    });

    socket.on("joined-public-chat", (sockets) => {
      console.log("sockets", sockets);
      setChannel(sockets);
    });

    socket.on("global-message", (message) => {
      console.log(message);
      setMessages((previous) => [...previous, message]);
    });

    return () => socket.off("global-message");
  }, [enqueueSnackbar, messages, socket, user]);

  return (
    <ErrorBoundary>
      {channel ? (
        <Chat
          global={channel}
          messages={messages}
          sendMessage={handleSendMessage}
        />
      ) : (
        <CircularProgress />
      )}
    </ErrorBoundary>
  );
}
