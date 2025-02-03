import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawerWidth = drawerOpen ? 240 : 60; // Width when expanded and when collapsed

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Saurabh
                    </Typography>
                    <Box display="flex" flexGrow={1}>
                        <Button color="inherit" href="about-me">About Me</Button>
                        <Button color="inherit" href="skills">Skills</Button>
                        <Button color="inherit" href="projects">Projects</Button>
                    </Box>
                    <Button color="inherit" href="#contact">Contact</Button>
                </Toolbar>
            </AppBar>
            
            <Drawer
                variant="permanent"
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                style={{ width: drawerWidth }}
                PaperProps={{ style: { width: drawerWidth } }}
            >
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Divider />
                <List>
                    <ListItem button component="a" href="https://github.com/yourUsername">
                        <ListItemIcon><GitHubIcon /></ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItem>
                    <ListItem button component="a" href="https://www.linkedin.com/in/yourUsername/">
                        <ListItemIcon><LinkedInIcon /></ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                    </ListItem>
                    {/* Add more links as needed */}
                </List>
            </Drawer>
        </div>
    );
}

export default Header;
