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
    <Typography variant='body' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link
        rel='noopener'
        target='_blank'
        color='inherit'
        href='https://github.com/Andrea-Pallotta'
      >
        Andrea Pallotta
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  );
}
