import { styled } from '@mui/system';
import MuiDrawer from '@mui/material/Drawer';
import style from './style/style';

/**
 * MUI Drawer styled component.
 */
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: style.drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...style.openedMixin(theme),
    '& .MuiDrawer-paper': style.openedMixin(theme),
  }),
  ...(!open && {
    ...style.closedMixin(theme),
    '& .MuiDrawer-paper': style.closedMixin(theme),
  }),
}));

export default Drawer;
