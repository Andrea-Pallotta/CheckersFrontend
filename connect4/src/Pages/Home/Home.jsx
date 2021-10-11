import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import NavigationDrawer from '../Navigation/NavigationDrawer';

export default function Home() {

    useEffect(() => {
        // Make API Calls
    }, []);

    return (
        <NavigationDrawer />
    )
}