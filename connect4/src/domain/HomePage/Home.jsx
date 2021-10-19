import React, { useState, useEffect, useContext } from "react";
import Chat from '../Chat/Chat'
import { useSnackbar } from "notistack";
import axios from "axios";
import { SocketContext } from "../../components/API/socket";
import { CircularProgress } from "@mui/material";
import ErrorBoundary from "../Error/ErrorBoundary";

export default function Home({ user }) {
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const socket = useContext(SocketContext);

  const getGlobalChat = async () => {
    return axios({
      url: "http://localhost:5050/getChannels",
      method: "get",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  const handleJoinGlobal = () => {
    socket.emit("global-chat-join", user.username, (ack) => {});
  };

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
    const handleSocket = () => {
      socket.on("connection", () => {
        getGlobalChat().then((res) => {
          setChannel(res.channels);
        });
        enqueueSnackbar("Connected to the socket", {
          variant: "success",
        });
      });
      socket.on("global-chat", (newChannel) => {
        setChannel(newChannel);
      });

      socket.on("global-message", (message) => {
        console.log(message);
        setMessages((previous) => [...previous, message]);
      });
    };
    handleSocket();

    return () => socket.off("global-message");
  }, [enqueueSnackbar, messages, socket]);

  return (
    <ErrorBoundary>
      {channel ? (
        <Chat
          user={user}
          global={channel}
          join={handleJoinGlobal}
          messages={messages}
          sendMessage={handleSendMessage}
        />
      ) : (
        <CircularProgress />
      )}
    </ErrorBoundary>
  );
}
