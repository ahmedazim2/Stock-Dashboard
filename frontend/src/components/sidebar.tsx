import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from '@tanstack/react-router';

interface SidebarProps {
    open: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleDrawer }) => {
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'Analysis', 'Prediction'].map((text, index) => (
                    <ListItem key={text} disablePadding >
                        <ListItemButton
                            component={Link}
                            to={`/${text.toLowerCase()}`}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                    cursor: 'pointer',
                                },
                            }}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            color='black'
            sx={{
                '& .MuiDrawer-paper': {
                    borderRadius: '0 10px 10px 0',
                    bgcolor: '#0FFCBE'// Add border radius here
                },
            }}

        >
            {list()}
        </Drawer>
    );
};

export default Sidebar;