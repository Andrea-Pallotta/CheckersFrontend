import React, { createRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./components/App/performance/reportWebVitals";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { SnackbarProvider } from "notistack";
import { Button } from "@mui/material";
Amplify.configure(awsExports);

const ref = createRef();
const dismiss = (key) => () => {
  ref.current.closeSnackbar(key);
};

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      ref={ref}
      maxSnack={3}
      dense={false}
      preventDuplicate
      autoHideDuration={3000}
      action={(key) => {
        return (
          <Button variant="outline" onClick={dismiss(key)}>
            Dimiss
          </Button>
        );
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
