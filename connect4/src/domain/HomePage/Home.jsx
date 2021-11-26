import React, { useState, useEffect, useContext } from 'react';
import Chat from '../Chat/Chat';
import { useSnackbar } from 'notistack';
import { SocketContext } from '../../components/API/socket';
import { CircularProgress } from '@mui/material';
import ErrorBoundary from '../Error/ErrorBoundary';
import { UserContext } from '../../components/API/user';

export default function Home() {
  const [channel, setChannel] = useState();
  // eslint-disable-next-line no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const socket = useContext(SocketContext);
  const user = useContext(UserContext);

  useEffect(() => {
    const joinPublicChat = () => {
      socket.emit('join-public-chat', user.username);
    };
    try {
      socket.on('connection', (id) => {
        user['socketId'] = id;
        enqueueSnackbar('Successfully connected to the server', {
          variant: 'success',
        });
        joinPublicChat();
      });
    } catch {
      enqueueSnackbar('Error connection to the server', {
        variant: 'success',
      });
    }

    socket.on('joined-public-chat', (sockets) => {
      setChannel(sockets);
    });
    return () => {
      socket.off('join-public-chat');
      socket.disconnect();
    };
  }, [enqueueSnackbar, socket, user]);

  return (
    <ErrorBoundary>
      {channel ? (
        <Chat
          global={channel.filter((socket) => socket.user !== user.username)}
        />
      ) : (
        <CircularProgress />
      )}
    </ErrorBoundary>
  );
}
