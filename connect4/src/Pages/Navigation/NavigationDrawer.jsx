import React, { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
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
import Home from "../Home/Home";
import { withSnackbar, useSnackbar } from "notistack";
import { Tooltip } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const fabStyle = {
  position: "absolute",
  bottom: 30,
  right: 30,
};

function NavigationDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [user, setUser] = useState({});
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    Auth.currentSession();
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        enqueueSnackbar("User Information retrieved successfully", {
          variant: "success",
        });
        setUser(user.attributes);
        console.log(user);
      })
      .catch(() =>
        enqueueSnackbar("Error retrieving user information", {
          variant: "error",
        })
      );
  }, [closeSnackbar, enqueueSnackbar]);

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

  const activePage = () => {
    switch (page) {
      case 0:
        return <Home />;
      case 2:
        return <div>Page 2</div>;
      default:
        return <div>Page 3</div>;
    }
  };

  const startGame = () => {
    console.log("start game");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
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
          <Typography variant="h6" noWrap component="div" style={{ flex: 1 }}>
            Connect 4
          </Typography>
          <Typography
            variant="h7"
            noWrap
            component="p"
            style={{ paddingRight: "1em" }}
          >
            {user.email}
          </Typography>
          <Box>
            <AmplifySignOut />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} onClick={handleCloseDrawer}>
        <DrawerHeader>
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
        <DrawerHeader />
        {activePage()}
      </Box>

      <Fab
        sx={fabStyle}
        aria-label="start"
        variant="extended"
        onClick={startGame}
      >
        <AddIcon sx={{ mr: 1 }} />
        Start Game
      </Fab>
    </Box>
  );
}

export default withSnackbar(NavigationDrawer);
