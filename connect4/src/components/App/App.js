import React, { useState, useEffect, createRef, useContext } from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useSnackbar, withSnackbar } from "notistack";
import { SocketContext, newSocket } from "../../components/API/socket";
import NavigationDrawer from "../../domain/Navigation/NavigationDrawer";
import { UserContext, UserContextProvider } from "../API/user";

const App = () => {
  const [authState, setAuthState] = useState();
  const [socket, setSocket] = useState();
  const [user, setUser] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);

      const storageUser = window.localStorage.getItem("user");
      if (storageUser) {
        setUser(JSON.parse(window.localStorage.getItem("user")));
        setSocket(newSocket(storageUser.username));
      } else {
        if (authData) {
          const userData = {
            username: authData.username,
            email: authData.attributes.email,
            phone_number: authData.attributes.phone_number,
            accessToken: authData.signInUserSession.accessToken,
          };
          setUser(userData);
          window.localStorage.setItem("user", JSON.stringify(userData));
          setSocket(newSocket(userData.username));
        }
      }

      if (nextAuthState === AuthState.SignedIn) {
        enqueueSnackbar("Signed In successfully", {
          variant: "success",
        });
      }
    });
  }, [enqueueSnackbar]);

  return authState === AuthState.SignedIn && user && socket ? (
    <SocketContext.Provider value={socket}>
      <UserContext.Provider value={user}>
        <NavigationDrawer />
      </UserContext.Provider>
    </SocketContext.Provider>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default withSnackbar(App);
