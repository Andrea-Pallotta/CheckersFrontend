import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import PersonIcon from '@mui/icons-material/Person';
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
    title: 'Profile',
    icon: <PersonIcon />,
  },
];

/**
 * List of clickable Icons that toggle the active page.
 *
 * @param {*} props
 * @return {*} 
 */
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
