import React from 'react';
import Typography from '@mui/material/Typography';

/**
 * Class to handle React errors.
 * Helpful to prevent the application from completely crashing.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, info: '', error: '' };
  }

  /**
   * Get error
   *
   * @param {*} error
   * @returns
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  /**
   * Set state if component caught exception.
   *
   * @param {*} error
   * @param {*} info
   */
  componentDidCatch(error, info) {
    this.setState(info, info);
    this.setState(error, error);
  }

  /**
   * Return message.
   *
   * @returns {React.Component}
   */
  render() {
    if (this.state.hasError) {
      return (
        <Typography variant='h6' color='primary'>
          {this.state.error} - {this.state.info}
        </Typography>
      );
    }

    return this.props.children;
  }
}
