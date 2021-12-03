import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import React from 'react';

const pageModel = [
  {
    title: 'Home',
    icon: <HomeRoundedIcon />,
  },
  {
    title: 'Leaderboard',
    icon: <LeaderboardRoundedIcon />,
  },
  {
    title: 'Game History',
    icon: <BookmarksRoundedIcon />,
  },
];

const TabViewOptions = ({ onClick }) => {
  return (
    <List>
      {pageModel.map((option, index) => {
        return (
          <ListItem
            button
            key={option.title}
            onClick={() => {
              onClick(index);
            }}
          >
            <ListItemIcon>
              <Tooltip title={option.title} enterDelay={300} leaveDelay={200}>
                <IconButton>{option.icon}</IconButton>
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary={option.title} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default TabViewOptions;
