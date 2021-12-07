import React, { useContext } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { UserContext } from '../Contexts/UserContext';
import { UserAvatar } from '../../imports/components.imports';
import { Auth } from 'aws-amplify';
import { useSnackbar } from 'notistack';

/**
 * Create User avatar without badge
 * @param {*} props
 * @returns React.Component
 */
const MenuAvatar = () => {
  const { user, setUser } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const signOut = async (popupState) => {
    Auth.signOut()
      .then(() => {
        setUser(null);
        popupState.close();
        enqueueSnackbar('Successfully signed out.', {
          variant: 'success',
        });
      })
      .catch(() => {
        enqueueSnackbar('Error signing out. Please refresh the page.', {
          variant: 'error',
        });
      });
  };

  return (
    <PopupState variant='popover' popupId='demoMenu'>
      {(popupState) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>
            <UserAvatar
              name={user.username}
              style={{
                width: 36,
                height: 36,
                boxShadow: '0 0 0 2px lightgray',
              }}
              {...bindTrigger(popupState)}
            />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => signOut(popupState)}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default MenuAvatar;
