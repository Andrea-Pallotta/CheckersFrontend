import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import req from '../../components/API/requests';
import { UserContext } from '../../components/Contexts/UserContext';
import { useSnackbar } from 'notistack';

/**
 * Component with players leaderboard.
 *
 * @returns {React.Component}
 */
const Leaderboard = () => {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const [end, setEnd] = useState(false);

  const { user } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const loadMoreUsers = () => {
    if (end === false) {
      console.log('loading more');
      usersFromDB();
      setIndex((prev) => prev + 20);
    }
  };

  const usersFromDB = () => {
    try {
      req.get('/getLeaderboard', { index }, user.accessToken).then((result) => {
        console.log(result);
        if (result.length < 20) setEnd(true);
      }, []);
    } catch (err) {
      console.log(err);
      setEnd(true);
      enqueueSnackbar('Error retrieving list of users', {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    if (users.length === 0) {
      loadMoreUsers();
    }
  }, []);

  return (
    <Box>
      <p></p>
    </Box>
  );
};

export default Leaderboard;
