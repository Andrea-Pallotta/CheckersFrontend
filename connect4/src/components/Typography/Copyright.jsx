import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

/**
 * Copyright component with the author's name.
 *
 * @param {*} props
 * @returns {React.Component}
 */
export default function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Andrea Pallotta
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  );
}
