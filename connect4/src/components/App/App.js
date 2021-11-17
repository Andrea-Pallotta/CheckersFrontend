import React, { createRef } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import NavigationDrawer from "../../domain/Navigation/NavigationDrawer";
import { SnackbarProvider } from "notistack";
import { Button } from "@mui/material";

const App = () => {
  const ref = createRef();
  const dismiss = (key) => () => {
    ref.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={ref}
      maxSnack={3}
      dense={false}
      preventDuplicate
      autoHideDuration={3000}
      action={(key) => {
        //<Button onClick={dismiss(key)}>'Dimiss'</Button>;
      }}
    >
      <NavigationDrawer />
    </SnackbarProvider>
  );
};

export default withAuthenticator(App);
