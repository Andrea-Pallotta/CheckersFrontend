import {
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import React, { useContext, useState } from 'react';
import { UserContext } from '../Contexts/UserContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

/**
 * Create a list of users in the public chat.
 *
 * @param {*} props
 * @return {React.Component}
 */
const UserList = ({ global }) => {
  const [value, setValue] = useState('');
  const { user } = useContext(UserContext);

  /**
   * Search users in list.
   *
   * @param {*} event
   */
  const valueChange = (event) => {
    setValue(event.target.value.trimLeft());
  };

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
   * Filter list of users
   * @returns {React.Component}
   */
  const listOfPlayers = global
    .filter((el) => {
      return (
        el.username !== user.username && el.username.includes(value.trim())
      );
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
          <ListItemText align='right'>
            <Chip label={player.state} color={userState(player.state)} />
          </ListItemText>
        </ListItem>
      );
    });

  return (
    <Grid item xs={3} style={{ borderRight: '1px solid #E0E0E0' }}>
      <Divider />
      <Grid item xs={12} style={{ padding: '10px' }}>
        <TextField
          id='outlined-basic-email'
          label='Search'
          value={value}
          variant='outlined'
          fullWidth
          onChange={valueChange}
          inputProps={{ maxLength: 15 }}
        />
      </Grid>
      <Divider />
      <List>{listOfPlayers}</List>
    </Grid>
  );
};

export default UserList;
