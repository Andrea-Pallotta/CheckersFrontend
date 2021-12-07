import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chip, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
const UserListItem = ({ player, challengeSent, sendChallenge }) => {
  const [challengeChip, setChallengeChip] = useState(false);

  const onMouseEnter = () => {
    setChallengeChip(true);
  };

  const onMouseLeave = () => {
    setChallengeChip(false);
  };

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
