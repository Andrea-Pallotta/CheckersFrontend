const drawerWidth = 240;

/**
 * Open drawer animation
 *
 * @param {*} theme
 * @returns
 */
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

/**
 * Close drawer animation
 *
 * @param {*} theme
 * @returns
 */
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

/**
 * Queue button style
 */
const buttonStyle = {
  position: 'absolute',
  width: '100%',
  bottom: '0',
  fontSize: '1.5em',
  paddingTop: '0.3em',
  paddingBottom: '0.5em',
};

const style = {
  openedMixin,
  closedMixin,
  buttonStyle,
  drawerWidth,
};

export default style;
