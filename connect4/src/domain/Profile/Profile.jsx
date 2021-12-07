import { Card, CardContent, Divider, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { UserContext } from '../../components/Contexts/UserContext';
import { Copyright, UserAvatar } from '../../imports/components.imports';

const label = (label) => (
  <Box
    component='span'
    fontWeight='bold'
    sx={{ display: 'inline-block', mx: '2px', color: 'black' }}
  >
    {label}
  </Box>
);

/**
 * Profile page with user's information.
 *
 * @returns {React.Component}
 */
const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <Box
      sx={{
        display: 'flex',
        justify: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography color={grey[500]} fontWeight='bold' variant='h2' mb='1em'>
        Your profile
      </Typography>
      <Card
        component={Paper}
        sx={{
          width: '440px',
          display: 'flex',
          justify: 'center',
          alignItems: 'center',
        }}
      >
        <CardContent>
          <UserAvatar name={user.username} />
          <Typography variant='h5' component='div' mt='0.5em'>
            {user.username}
          </Typography>

          <Divider sx={{ marginTop: '0.5em', marginBottom: '0.5em' }} />
          <Typography sx={{ mb: 1.5 }} color={grey[500]}>
            {label('Score:')} {user.score}
            <br />
          </Typography>

          <Divider sx={{ marginTop: '0.5em', marginBottom: '0.5em' }} />
          <Typography sx={{ mb: 1.5 }} color={grey[500]}>
            {label('Record:')} {user.wins} - {user.draws} - {user.losses}
            <br />
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ position: 'absolute', bottom: '1em' }} color='secondary'>
        <Copyright />
      </Box>
    </Box>
  );
};

export default Profile;
