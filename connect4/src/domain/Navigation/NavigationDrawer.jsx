import React, { useContext, useEffect, useState, useCallback } from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import style from './style/style';
import { useSnackbar } from 'notistack';
import { UserContext } from '../../components/Contexts/UserContext';
import { SocketContext } from '../../components/Contexts/SocketContext';
import { GameContext } from '../../components/Contexts/GameContext';
import { TimerContext } from '../../components/Contexts/TimerContext';
import Game from '../../components/Classes/Game';

import { Drawer, DrawerHeader, AppBar } from '../../imports/domain.imports';
import {
  GameModal,
  MenuAvatar,
  TabViewOptions,
  TabViewPages,
} from '../../imports/components.imports';

/**
 * Side drawer menu that wraps the entire application (past auth).
 *
 * @returns {React.Component}
 */
const NavigationDrawer = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [inQueue, setInQueue] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [gameState, setGameState] = useState();
  const [channel, setChannel] = useState();
  const [turnTimer, setTurnTimer] = useState(30);

  const { user } = useContext(UserContext);
  const socket = useContext(SocketContext);

  const theme = useTheme();

  const { enqueueSnackbar } = useSnackbar();

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSetPage = (index) => {
    setPage(index);
  };

  /**
   * Emit event to start queue.
   *
   * @param {*} event
   */
  const startGame = (event) => {
    event.preventDefault();
    setInQueue(true);
    socket.emit('join-queue');
  };

  /**
   * Handle game state from server.
   */
  const handleGameState = useCallback(
    (state) => {
      setGameState(Game.fromJSON(state));
      setInQueue(false);
      if (Game.fromJSON(state)) {
        user.player =
          Game.fromJSON(state).player1.username === user.username ? 1 : 2;
        handleOpenModal();
        enqueueSnackbar('Successfully retrieved game state!', {
          variant: 'success',
        });
      } else {
        enqueueSnackbar('Error retrieving game state. Try again.', {
          variant: 'error',
        });
      }
    },
    [enqueueSnackbar, user.player, user.username]
  );

  useEffect(() => {
    socket.on('joined-public-chat', (sockets) => {
      setChannel(sockets);
    });

    return () => socket.off('joined-public-chat');
  }, [socket]);

  useEffect(() => {
    try {
      socket.on('connection', (id) => {
        user.setSocketId(id);
        enqueueSnackbar('Successfully connected to the server', {
          variant: 'success',
        });
        socket.emit('join-public-chat', user.username);
      });
    } catch {
      enqueueSnackbar('Error connection to the server', {
        variant: 'success',
      });
    }
    return () => socket.disconnect();
  }, [enqueueSnackbar, socket, user]);

  useEffect(() => {
    socket.on(
      'start-game',
      (state) => {
        if (state) {
          handleGameState(state);
        } else {
          enqueueSnackbar('Error retrieving game state. Try again.', {
            variant: 'error',
          });
        }

        return () => socket.off('start-game');
      },
      []
    );

    socket.on('reconnect-game', (state) => {
      handleGameState(state);
    });

    socket.on('queue-failed', () => {
      setInQueue(false);
      enqueueSnackbar('Queue failed. Try again.', {
        variant: 'error',
      });
    });

    if (user.activeGame !== null && user.activeGame !== undefined) {
      socket.emit('get-current-game', user.activeGame);
    }

    return () => {
      socket.off('start-game');
      socket.off('queue-failed');
    };
  }, [enqueueSnackbar, handleGameState, socket, user.activeGame]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open} theme={theme}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleOpenDrawer}
            edge='start'
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' style={{ flex: 1 }}>
            Connect 4
          </Typography>
          <MenuAvatar action={() => {}} />
          <Typography
            variant='h4'
            noWrap
            component='p'
            style={{ paddingRight: '1em', paddingLeft: '0.3em' }}
          >
            {user.username}
          </Typography>
          <Box>
            <AmplifySignOut />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        open={open}
        onClick={handleCloseDrawer}
        theme={theme}
      >
        <DrawerHeader theme={theme}>
          <IconButton>
            {theme.direction === 'trl' ? (
              <ChevronRightRoundedIcon />
            ) : (
              <ChevronLeftRoundedIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <TabViewOptions onClick={handleSetPage} />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader theme={theme} />
        <TabViewPages page={page} channel={channel} />
      </Box>
      <LoadingButton
        sx={style.buttonStyle}
        onClick={startGame}
        startIcon={<AddIcon />}
        loading={inQueue}
        loadingPosition='start'
        variant='contained'
      >
        {inQueue ? 'In Queue' : 'Find Game'}
      </LoadingButton>
      {gameState && (
        <GameContext.Provider value={{ gameState, setGameState }}>
          <TimerContext.Provider value={{ turnTimer, setTurnTimer }}>
            <GameModal open={openModal} handleClose={handleCloseModal} />
          </TimerContext.Provider>
        </GameContext.Provider>
      )}
    </Box>
  );
};

export default NavigationDrawer;
