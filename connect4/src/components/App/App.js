import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useSnackbar, withSnackbar } from 'notistack';
import { SocketContext, newSocket } from '../Contexts/SocketContext';
import { UserContext } from '../Contexts/UserContext';
import User from '../Classes/User';
import Response from '../Classes/Response';
import req from '../API/requests';

import { NavigationDrawer } from '../../imports/domain.imports';

/**
 * Main component added to index.js
 *
 * @return {*}
 */
const App = () => {
  const [authState, setAuthState] = useState();
  const [socket, setSocket] = useState();
  const [user, setUser] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const mountedRef = useRef(true);

  /**
   * Get user from Congito and set User and Socket contexts.
   */
  const fetchUser = useCallback(
    (authData) => {
      try {
        req
          .post(
            '/insertUser',
            {
              username: authData.username,
              email: authData.attributes.email,
            },
            authData.signInUserSession.accessToken
          )
          .then((data) => {
            const user = User.fromJSON(Response.fromJSON(data).data);
            if (user) {
              user.setToken(authData.signInUserSession.accessToken);
              if (!mountedRef.current) return null;
              setUser(user);
              setSocket(newSocket(user.username, user.accessToken));
            }
          }, []);
      } catch {
        enqueueSnackbar('Error retrieving user information', {
          variant: 'error',
        });
      }
    },
    [enqueueSnackbar]
  );

  /**
   * Check if user is logged in and retrieve user information.
   */
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      if (authData) {
        fetchUser(authData);
      }

      if (nextAuthState === AuthState.SignedIn) {
        setAuthState(nextAuthState);
        enqueueSnackbar('Successfully retrieved user information', {
          variant: 'success',
        });
      }
    });
  }, [enqueueSnackbar, fetchUser]);

  return authState === AuthState.SignedIn && user && socket ? (
    <SocketContext.Provider value={socket}>
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationDrawer />
      </UserContext.Provider>
    </SocketContext.Provider>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default withSnackbar(App);
