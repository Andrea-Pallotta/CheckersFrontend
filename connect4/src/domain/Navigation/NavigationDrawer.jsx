import React, { useEffect, useState, useCallback } from "react";
import Auth from "@aws-amplify/auth";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Home from "../HomePage/Home";
import { withSnackbar, useSnackbar } from "notistack";
import { Button, MenuItem, Tooltip } from "@mui/material";
import Menu from "@mui/material/Menu";
import CircularProgress from "@mui/material/CircularProgress";
import { SocketContext, socket } from "../../components/API/socket";
import UserAvatar from "../../components/Avatar/Avatar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Drawer from "./Drawer";
import DrawerHeader from "./DrawerHeader";
import AppBar from "./AppBar";
import style from "./style/style";

const NavigationDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [user, setUser] = useState();
  const [userSocket, setUserSocket] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleUserRetrieval = useCallback(() => {
    Auth.currentSession();
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        enqueueSnackbar("User Information retrieved successfully", {
          variant: "success",
        });
        setUser(user);
        return user;
      })
      .catch(() =>
        enqueueSnackbar("Error retrieving user information", {
          variant: "error",
        })
      );
  }, [enqueueSnackbar]);

  useEffect(() => {
    handleUserRetrieval();
  }, [handleUserRetrieval]);

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const pageModel = [
    {
      title: "Home",
      icon: <HomeRoundedIcon />,
    },
    {
      title: "Leaderboard",
      icon: <LeaderboardRoundedIcon />,
    },
    {
      title: "Game History",
      icon: <BookmarksRoundedIcon />,
    },
  ];

  const tabViewOptions = pageModel.map((option, index) => {
    return (
      <ListItem
        button
        key={option.title}
        onClick={() => {
          setPage(index);
        }}
      >
        <ListItemIcon>
          <Tooltip title={option.title} enterDelay={300} leaveDelay={200}>
            <IconButton>{option.icon}</IconButton>
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary={option.title} />
      </ListItem>
    );
  });

  const menuAvatar = (action) => {
    return (
      <PopupState variant="popover" popupId="demoMenu">
        {(popupState) => (
          <React.Fragment>
            <Button {...bindTrigger(popupState)}>
              <UserAvatar
                name={user.username}
                style={{
                  width: 36,
                  height: 36,
                  boxShadow: "0 0 0 2px lightgray",
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

  const activePage = () => {
    switch (page) {
      case 0:
        return <Home user={user} />;
      case 2:
        return <div>Page 2</div>;
      default:
        return <div>Page 3</div>;
    }
  };

  const startGame = () => {};

  return (
    <SocketContext.Provider value={socket}>
      {user ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open} theme={theme}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleOpenDrawer}
                edge="start"
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                style={{ flex: 1 }}
              >
                Connect 4
              </Typography>
              {menuAvatar(() => {
                console.log("clicked");
              })}
              <Typography
                variant="h4"
                noWrap
                component="p"
                style={{ paddingRight: "1em", paddingLeft: "0.3em" }}
              >
                {user.username}
              </Typography>
              <Box>
                <AmplifySignOut />
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            open={open}
            onClick={handleCloseDrawer}
            theme={theme}
          >
            <DrawerHeader theme={theme}>
              <IconButton>
                {theme.direction === "trl" ? (
                  <ChevronRightRoundedIcon />
                ) : (
                  <ChevronLeftRoundedIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>{tabViewOptions}</List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader theme={theme} />
            {activePage()}
          </Box>

          <Fab
            sx={style.fabStyle}
            aria-label="start"
            variant="extended"
            onClick={startGame}
          >
            <AddIcon sx={{ mr: 1 }} />
            Start Game
          </Fab>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </SocketContext.Provider>
  );
};

export default withSnackbar(NavigationDrawer);
