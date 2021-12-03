import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import ErrorBoundary from '../../domain/Error/ErrorBoundary';
import Home from '../../domain/HomePage/Home';

const TabViewPages = ({ page, channel }) => {
  const activePage = (channel) => {
    switch (page) {
      case 0:
        return <Home channel={channel} />;
      case 1:
        return <div>Page 2</div>;
      case 2:
        return <div>Page 3</div>;
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
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color='error' thickness={5} />
        </Backdrop>
      )}
    </ErrorBoundary>
  );
};

export default TabViewPages;
