import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chip, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SocketContext } from '../Contexts/SocketContext';
import { useSnackbar } from 'notistack';

/**
 * Return Chip color based on user's state.
 *
 * @param {string} state
 * @return {string}
 */
const userState = (state) => {
  switch (state) {
    case 'Online':
      return 'success';
    case 'In Game':
      return 'error';
    case 'In Queue':
      return 'warning';
    default:
      return 'secondary';
  }
};

/**
 * User item in chat list.
 *
 * @param {*} props
 * @returns
 */
const UserListItem = ({ player }) => {
  const [challengeChip, setChallengeChip] = useState(false);
  const [challengeSent, setChallengeSent] = useState(false);
  const socket = useContext(SocketContext);
  const { enqueueSnackbar } = useSnackbar();

  const onMouseEnter = () => {
    setChallengeChip(true);
  };

  const onMouseLeave = () => {
    setChallengeChip(false);
  };

  const sendChallenge = (username) => {
    if (!challengeSent) {
      socket.emit('challenge-player', username);
      setChallengeSent(true);
    } else {
      enqueueSnackbar(`Challenge to ${username} already sent.`, {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    socket.on('challenge-declined', (username) => {
      setChallengeSent(false);
      enqueueSnackbar(`${username} declined challenge.`, {
        variant: 'error',
      });
    });

    socket.on('start-game', () => {
      setChallengeSent(false);
    });

    return () => socket.off('challenge-declined');
  }, [enqueueSnackbar, socket]);

  return (
    <ListItem
      button
      key={uuidv4()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary={player.username}>{player.username}</ListItemText>
      <ListItemText align='right'>
        {player.state === 'Online' && challengeChip === true && (
          <Chip
            label={challengeSent ? 'Sent' : 'Challenge'}
            onClick={() => sendChallenge(player.username)}
            color={challengeSent ? 'success' : 'info'}
            sx={{ marginRight: '0.5em' }}
          />
        )}
        <Chip label={player.state} color={userState(player.state)} />
      </ListItemText>
    </ListItem>
  );
};

export default UserListItem;
