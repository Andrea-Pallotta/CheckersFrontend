import React, { useState } from "react";
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

const players = [
  {
    key: "Player 1",
    name: "Player 1",
  },

  {
    key: "Player 2",
    name: "Player 2",
  },
];

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

const listOfPlayers = players.map((player) => {
  return (
    <ListItem button key={player.key}>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary={player.name}>{player.name}</ListItemText>
      <ListItemText secondary="online" align="right"></ListItemText>
    </ListItem>
  );
});

const ChatView = () => {
  const [messages, setMessages] = useState(initialMessages);

  const listOfMessages = messages.map((message) => {
    return (
      <Message
        author={message.author}
        message={message.content}
        time={message.time}
        key={uuidv4()}
      />
    );
  });

  const handleAppendMessage = (author, content, time) => {
    const list = messages.concat({
      author: author,
      content: content,
      time: time,
    });

    setMessages(list);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6">Global Chat</Typography>
        </Grid>
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
            {listOfMessages}
          </Stack>

          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outline-basic-email"
                label="Type something..."
                fullWidth
              />
            </Grid>
            <Grid item xs={1} align="right">
              <Fab color="primary" aria-label="add" onClick={() => { handleAppendMessage('Player 4', 'Message 5', '05:44 p.m') }}>
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatView;
