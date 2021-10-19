import React from "react";
import Typography from "@mui/material/Typography";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, info: "", error: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState(info, info);
    this.setState(error, error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Typography variant="h6" color="primary">
          {this.state.error} - {this.state.info}
        </Typography>
      );
    }

    return this.props.children;
  }
}
