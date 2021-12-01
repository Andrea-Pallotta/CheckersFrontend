import React, { useState, useEffect } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useSnackbar, withSnackbar } from 'notistack';
import { SocketContext, newSocket } from '../Contexts/SocketContext';
import NavigationDrawer from '../../domain/Navigation/NavigationDrawer';
import { UserContext } from '../Contexts/UserContext';

const App = () => {
  const [authState, setAuthState] = useState();
  const [socket, setSocket] = useState();
  const [user, setUser] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      if (authData) {
        const userData = {
          username: authData.username,
          email: authData.attributes.email,
          phone_number: authData.attributes.phone_number,
          accessToken: authData.signInUserSession.accessToken,
        };
        setUser(userData);
        setSocket(newSocket(userData.username, userData.accessToken));
      }

      if (nextAuthState === AuthState.SignedIn) {
        setAuthState(nextAuthState);
        enqueueSnackbar('Successfully retrieved user information', {
          variant: 'success',
        });
      } else {
        enqueueSnackbar('Failed retrieving user information. Sign In again.', {
          variant: 'error',
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
