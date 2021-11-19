import React, { useContext, useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Message from "./Message";
import { UserContext } from "../../components/API/user";

const Chat = (props) => {
  const { global, messages } = props;
  const [value, setValue] = useState("");
  const user = useContext(UserContext);
  const members = global.filter((socket) => socket.user !== user.username);

  const messageRef = useRef(null);

  const scrollToEndMessage = () => {
    messageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToEndMessage, [messages]);

  const handleTextFieldValueChange = (event) => {
    setValue(event.target.value);
  };

  const listOfMessages = messages.map((message) => {
    return (
      <Message
        author={message.author === user.username ? null : message.author}
        message={message.content}
        time={message.time}
        key={uuidv4()}
      />
    );
  });

  const listOfPlayers = members
    .filter((el) => {
      return el.username !== user.username;
    })
    .map((player) => {
      return (
        <ListItem button key={uuidv4()}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={player.username}>
            {player.username}
          </ListItemText>
          <ListItemText secondary="online" align="right"></ListItemText>
        </ListItem>
      );
    });

  return (
    <Box>
      <Grid container>
        <Stack spacing={1} ml={1} mb={1}>
          <Typography variant="h6" color="theme.primary">
            Public Chat
          </Typography>
          <Typography variant="h7" color="secondary">
            {global.length - 1} members online
          </Typography>
        </Stack>
      </Grid>

      <Grid
        container
        component={Paper}
        style={{ width: "100%", height: "77vh" }}
      >
        <Grid item xs={3} style={{ borderRight: "1px solid #E0E0E0" }}>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Divider />
          <List>{listOfPlayers}</List>
        </Grid>

        <Grid item xs={9}>
          <Stack style={{ height: "65vh", overflowY: "auto" }}>
            {messages.length > 0 ? (
              listOfMessages
            ) : (
              <Typography variant="h7" ml={4} mt={4}>
                No messages yet.
              </Typography>
            )}
            <div ref={messageRef} />
          </Stack>

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
                onClick={() => {
                  setValue("");
                  props.sendMessage(value);
                }}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
