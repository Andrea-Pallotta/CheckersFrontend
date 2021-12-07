import React, { useContext, useEffect, useState } from 'react';
import req from '../../components/API/requests';
import { UserContext } from '../../components/Contexts/UserContext';
import { useSnackbar } from 'notistack';
import { LeaderboardTable } from '../../imports/components.imports';
import { Chip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { grey } from '@mui/material/colors';

/**
 * Component with players leaderboard.
 *
 * @returns {React.Component}
 */
const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const formatUsers = (users) => {
    users.forEach((user) => {
      user.activeGame = user.activeGame ? (
        <Chip label='In Game' color='error' />
      ) : (
        <Chip label='Not in Game' color='success' />
      );
    });
  };

  useEffect(() => {
    try {
      req.get('/getLeaderboard', {}, user.accessToken).then((result) => {
        formatUsers(result.data);
        setUsers((prev) => prev.concat(result.data));
      }, []);
    } catch {
      enqueueSnackbar('Error retrieving list of users', {
        variant: 'error',
      });
    }
  }, [enqueueSnackbar, user.accessToken]);

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Typography color={grey[500]} fontWeight='bold' variant='h2' mb='1em'>
        Leaderboard
      </Typography>
      <LeaderboardTable users={users} />
    </Box>
  );
};

export default Leaderboard;
