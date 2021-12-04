import {
  Badge,
  Button,
  Divider,
  Fab,
  Grid,
  List,
  ListItemText,
  Menu,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../Contexts/SocketContext';
import { useSnackbar } from 'notistack';
import { GameContext } from '../Contexts/GameContext';
import SendIcon from '@mui/icons-material/Send';

const GameChatModal = () => {
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState('');
  const open = Boolean(anchorEl);

  const { enqueueSnackbar } = useSnackbar();

  const socket = useContext(SocketContext);
  const { gameState } = useContext(GameContext);

  const handleOpenChat = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseChat = () => {
    setAnchorEl(null);
  };

  const handleTextFieldValueChange = (event) => {
    setValue(event.target.value.trimLeft());
  };

  useEffect(() => {
    socket.on('send-game-message', (message) => {
      console.log(message);
    });
    return () => socket.off('send-game-message');
  }, [gameState.roomId, socket]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (value.trim().length > 0) {
      socket.emit('game-message', { message: value, roomId: gameState.roomId });
    } else {
      enqueueSnackbar('Cannot send an empty message', {
        variant: 'warning',
      });
    }
    setValue('');
  };

  const notificationsLabel = () => {
    if (notifications === 0) {
      return 'no notifications';
    } else if (notifications > 99) {
      return 'more than 99 notifications';
    } else {
      return `${notifications} notifications`;
    }
  };

  return (
    <Box>
      <Button
        id='basic-button'
        variant='contained'
        color='secondary'
        aria-label={notificationsLabel}
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        endIcon={
          <Badge badgeContent={notifications}>
            <MailIcon />
          </Badge>
        }
        onClick={handleOpenChat}
      >
        GAME CHAT
      </Button>
      <Menu
        id='game-chat'
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseChat}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Grid item xs={11}>
          <List>
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
          </List>

          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={9}>
              <TextField
                id='outline-multiline-flexible'
                label={`Type a message (${100 - value.length} chars left)`}
                value={value}
                onChange={handleTextFieldValueChange}
                fullWidth
                inputProps={{ maxLength: 20 }}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSendMessage(event, value);
                  }
                }}
              />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={2} align='right'>
              <Fab
                sx={{ marginLeft: '0.5em' }}
                color='primary'
                aria-label='add'
                onClick={(event) => {
                  handleSendMessage(event, value);
                }}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Menu>
    </Box>
  );
};

export default GameChatModal;
