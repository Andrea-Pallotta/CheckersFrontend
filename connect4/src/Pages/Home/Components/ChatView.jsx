import React from "react";
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
          <List style={{ height: "65vh", overflowY: "auto" }}>
            <Message author={null} message='Message sent 1' time='12:33 p.m.' />
            <Message author='Player 2' message='Message received 2' time='12:33 p.m.' />
            <Message author='Player 2' message='Message received 2' time='12:33 p.m.' />
          </List>

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
              <Fab color="primary" aria-label="add">
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
