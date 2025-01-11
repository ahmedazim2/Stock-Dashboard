import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

interface ButtonAppBarProps {
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ toggleDrawer }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ borderRadius: '0 0 5px 5px' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Stock Hub
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default ButtonAppBar;