import { List } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import React from 'react';
import { PageListItem } from '../../imports/components.imports';

const pageModel = [
  {
    title: 'Home',
    icon: <HomeRoundedIcon />,
    onclick,
  },
  {
    title: 'Leaderboard',
    icon: <LeaderboardRoundedIcon />,
  },
  {
    title: 'Profile',
    icon: <PersonRoundedIcon />,
  },
];

/**
 * List of clickable Icons that toggle the active page.
 *
 * @param {*} props
 * @return {*}
 */
const TabViewOptions = ({ onClick, isQueue, startQueue, stopQueue }) => {
  const queue = {
    title: isQueue ? 'Stop Queue' : 'Find Game',
    onClick: isQueue ? stopQueue : startQueue,
    icon: isQueue ? (
      <RemoveCircleOutlineRoundedIcon />
    ) : (
      <AddCircleOutlineRoundedIcon />
    ),
  };

  return (
    <List>
      {pageModel.map((option, index) => {
        return (
          <PageListItem
            key={option.title}
            title={option.title}
            click={() => onClick(index)}
            icon={option.icon}
          />
        );
      })}
      <PageListItem
        key={queue.title}
        title={queue.title}
        click={queue.onClick}
        icon={queue.icon}
      />
    </List>
  );
};

export default TabViewOptions;
