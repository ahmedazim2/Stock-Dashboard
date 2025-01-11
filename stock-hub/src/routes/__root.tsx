// import { blueGrey } from '@mui/material/colors';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider, createTheme } from '@mui/material';
import ButtonAppBar from '../components/menubar';
import Sidebar from '../components/sidebar';
import React, { useState } from 'react';
import "../styles/_global.scss"


export const Route = createRootRoute({
    component: RootComponent,
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#0FFCBE',
        },
    },
    typography: {
        fontFamily: 'Quicksand, sans-serif',
    },
});

function RootComponent() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setSidebarOpen(open);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex' }}>
                <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
                <div style={{ flexGrow: 1 }}>
                    <ButtonAppBar toggleDrawer={toggleDrawer} />
                    <Outlet />
                </div>
            </div>
        </ThemeProvider>
    );
}