import React, { useContext, useEffect, useRef, useState } from "react";
import { Divider, Fab, Grid, TextField } from "@mui/material";
import ChatMessages from "./ChatMessages";
import SendIcon from "@mui/icons-material/Send";
import { SocketContext } from "../../components/API/socket";
import { useSnackbar } from "notistack";

const ChatComponent = ({ messages, to, messageRef }) => {
  const [value, setValue] = useState("");
  const socket = useContext(SocketContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const scrollToEndMessage = () => {
    messageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleTextFieldValueChange = (event) => {
    setValue(event.target.value.trim());
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (value.length > 0) {
      socket.emit(`${to}`, value);
    } else {
      enqueueSnackbar("Cannot send an empty message", {
        variant: "warning",
      });
    }
    setValue("");
  };

  useEffect(scrollToEndMessage, [messages]);

  return (
    <Grid item xs={9}>
      <ChatMessages messages={messages} messageRef={messageRef} />
      <Divider />
      <Grid container style={{ padding: "20px" }}>
        <Grid item xs={11}>
          <TextField
            id="outline-multiline-flexible"
            label="Type something..."
            multiline
            maxRows={3}
            value={value}
            onChange={handleTextFieldValueChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={1} align="right">
          <Fab
            color="primary"
            aria-label="add"
            onClick={(event) => {
              handleSendMessage(event, value);
            }}
          >
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatComponent;
