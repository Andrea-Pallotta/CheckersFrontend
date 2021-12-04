import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { avatarName } from '../Avatar/Avatar';

const GameStatusBar = ({ player, orientation }) => {
  return orientation === 'row' ? (
    <Card sx={{ display: 'flex', padding: '0.5em 0.5em 0.5em 0' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto ' }}>
          <Typography component='div' variant='h5'>
            {player.username}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {player.score} points
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Typography
            variant='subtitle2'
            color='text.secondary'
            component='div'
          >
            Record: {player.wins} - {player.draws} - {player.losses}
          </Typography>
        </Box>
      </Box>
      <CardMedia component='div'>
        <Avatar
          {...avatarName(player.username, {
            width: 56,
            height: 56,
            marginTop: '1em',
            boxShadow: '0 0 0 2px lightgray',
          })}
        />
      </CardMedia>
    </Card>
  ) : (
    <Card sx={{ display: 'flex', padding: '0.5em' }}>
      <CardMedia component='div'>
        <Avatar
          {...avatarName(player.username, {
            width: 56,
            height: 56,
            marginTop: '1em',
            boxShadow: '0 0 0 2px lightgray',
          })}
        />
      </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto ' }}>
          <Typography component='div' variant='h5'>
            {player.username}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {player.score} points
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Typography
            variant='subtitle2'
            color='text.secondary'
            component='div'
          >
            Record: {player.wins} - {player.draws} - {player.losses}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default GameStatusBar;
