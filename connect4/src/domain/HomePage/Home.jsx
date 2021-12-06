import React, { useContext } from 'react';
import { UserContext } from '../../components/Contexts/UserContext';
import { Chat } from '../../imports/domain.imports';

/**
 * Home page component with public chat.
 *
 * @param {*} props
 * @returns {React.Component}
 */
const Home = ({ channel }) => {
  const { user } = useContext(UserContext);

  return (
    <Chat global={channel.filter((socket) => socket.user !== user.username)} />
  );
};

export default Home;
