import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import React from 'react';

const PageListItem = ({ title, icon, click }) => {
  return (
    <ListItem button key={title} onClick={click}>
      <ListItemIcon>
        <Tooltip title={title} enterDelay={300} leaveDelay={200}>
          <IconButton>{icon}</IconButton>
        </Tooltip>
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default PageListItem;
