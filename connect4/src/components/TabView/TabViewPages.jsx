import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

import {
  Home,
  Leaderboard,
  Profile,
  ErrorBoundary,
} from '../../imports/domain.imports';

/**
 * Toggle between active page based on page value.
 *
 * @param {*} props.
 * @return {React.Component}
 */
const TabViewPages = ({ page, channel }) => {
  const activePage = (channel) => {
    switch (page) {
      case 0:
        return <Home channel={channel} />;
      case 1:
        return <Leaderboard />;
      case 2:
        return <Profile />;
      default:
        return <CircularProgress color='error' thickness={5} />;
    }
  };

  return (
    <ErrorBoundary>
      {channel ? (
        activePage(channel)
      ) : (
        <Backdrop
          sx={{ color: '#FFF', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color='error' thickness={5} />
        </Backdrop>
      )}
    </ErrorBoundary>
  );
};

export default TabViewPages;
