import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Auth from '@aws-amplify/auth';
import { useSnackbar } from 'notistack';
import { Box } from '@mui/system';

const fabStyle = {
    position: 'absolute',
    bottom: 30,
    right: 30,
};

export default function Home() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
 
    useEffect(() => {

        Auth.currentAuthenticatedUser({
            bypassCache: false, 
        })
        .then(() => enqueueSnackbar('User Information retrieved successfully', { variant: 'success' }))
        .catch(() => enqueueSnackbar('Error retrieving user information', { variant: 'error' }));
        
    }, [closeSnackbar, enqueueSnackbar]);

    const startGame = () => {
        console.log('start game');
    };

    return (
        <Box>
            <Typography>Page 1</Typography>
            <Fab sx={fabStyle} aria-label='start' variant="extended" onClick={(startGame)}>
                <AddIcon sx={{ mr: 1 }}/>
                Start Game
            </Fab>
        </Box>
    )
}