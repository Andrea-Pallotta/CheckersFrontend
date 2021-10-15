import React, { useState, useEffect } from "react";
import ChatView from "./Components/ChatView";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import axios from "axios";
import { socket } from "../../Api/socket";

export default function Home({ user }) {
  const [channel, setChannel] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
        console.log(newChannel);
        //setChannel(newChannel);
      });
    };
    handleSocket();
  }, [enqueueSnackbar]);

  return channel ? (
    <Box>
      <ChatView user={user} global={channel} join={handleJoinGlobal} />
    </Box>
  ) : null;
}
