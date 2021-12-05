import React, { useContext, useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SocketContext } from '../../components/Contexts/SocketContext';
import UserList from '../../components/Lists/UserList';
import ChatLabel from '../../components/Labels/ChatLabel';
import ChatComponent from './ChatComponent';
import Message from '../../components/Classes/Message';

/**
 * Public chat component.
 *
 * @param {*} props
 * @return {React.Component}
 */
const Chat = ({ global }) => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  const messageRef = useRef(null);

  /**
   * Scroll to the last message.
   */
  const scrollToEndMessage = () => {
    messageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToEndMessage, [messages]);

  useEffect(() => {
    socket.on('send-message', (message) => {
      setMessages((prev) => [...prev, Message.fromJSON(message)]);
    });
    return () => socket.off('send-message');
  }, [socket]);

  return (
    <Box>
      <ChatLabel count={global.length - 1} />
      <Grid
        container
        component={Paper}
        style={{ width: '100%', height: '100%' }}
      >
        <UserList global={global} />

        <ChatComponent
          messages={messages}
          to='public-message'
          messageRef={messageRef}
          maxLength={100}
        />
      </Grid>
    </Box>
  );
};

export default Chat;
