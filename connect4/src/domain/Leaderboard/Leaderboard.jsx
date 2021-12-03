import { Button, List, ListItemText, Menu } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Leaderboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenChat = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseChat = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenChat}
      >
        Game Chat
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
      </Menu>
    </Box>
  );
};

export default Leaderboard;
