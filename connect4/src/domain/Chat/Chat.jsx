import React, { useContext, useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SocketContext } from '../../components/API/socket';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../components/API/user';
import UserList from '../../components/Lists/UserList';
import ChatLabel from '../../components/Labels/ChatLabel';
import ChatComponent from './ChatComponent';

const Chat = (props) => {
  const { global } = props;
  const user = useContext(UserContext);
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  const messageRef = useRef(null);

  const scrollToEndMessage = () => {
    messageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToEndMessage, [messages]);

  useEffect(() => {
    socket.on('send-message', (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => socket.off('send-message');
  }, [socket, user.username]);

  const listOfPlayers = global
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
          <ListItemText secondary='online' align='right'></ListItemText>
        </ListItem>
      );
    });

  return (
    <Box>
      <ChatLabel count={global.length - 1} />
      <Grid
        container
        component={Paper}
        style={{ width: '100%', height: '77vh' }}
      >
        <UserList list={listOfPlayers} />

        <ChatComponent
          messages={messages}
          to='public-message'
          messageRef={messageRef}
        />
      </Grid>
    </Box>
  );
};

export default Chat;
