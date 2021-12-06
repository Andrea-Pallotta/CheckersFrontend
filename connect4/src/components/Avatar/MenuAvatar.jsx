import React, { useContext } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { UserContext } from '../Contexts/UserContext';

import { UserAvatar } from '../../imports/components.imports';

/**
 * Create User avatar without badge
 * @param {*} props
 * @returns React.Component
 */
const MenuAvatar = ({ action }) => {
  const { user } = useContext(UserContext);
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
            <MenuItem
              onClick={() => {
                popupState.close();
                action();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default MenuAvatar;
