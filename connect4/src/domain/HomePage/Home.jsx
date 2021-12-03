import React, { useContext } from 'react';
import Chat from '../Chat/Chat';
import { UserContext } from '../../components/Contexts/UserContext';

const Home = ({ channel }) => {
  const { user } = useContext(UserContext);

  return (
    <Chat global={channel.filter((socket) => socket.user !== user.username)} />
  );
};

export default Home;
