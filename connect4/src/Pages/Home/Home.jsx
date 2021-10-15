import React, { useState, useEffect, useContext } from "react";
import ChatView from "./Components/ChatView";
import { useSnackbar } from "notistack";
import axios from "axios";
import { SocketContext } from "../../Api/socket";
import { CircularProgress, Typography } from "@mui/material";

const initialMessages = [
  {
    content: "Message sent 1",
    time: "12:33 p.m.",
  },
  {
    author: "Player 2",
    content: "Message received 2",
    time: "12:33 p.m.",
  },
  {
    author: "Player 3",
    content: "Message received 3",
    time: "12:33 p.m.",
  },
];

export default function Home({ user }) {
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState(initialMessages);
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
        if (!channel.messages) {
          channel.messages = [message];
        } else {
          channel.messages.push(message);
        }
      });
    };
    handleSocket();
  }, [channel, enqueueSnackbar, socket]);

  return (
    <ErrorBoundary>
      {channel ? (
        <ChatView
          user={user}
          global={channel}
          join={handleJoinGlobal}
          messages={messages}
        />
      ) : <CircularProgress />}
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Typography variant="h3" color="Highlight">
          Something went wrong
        </Typography>
      );
    }

    return this.props.children;
  }
}
