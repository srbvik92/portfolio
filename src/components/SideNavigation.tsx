import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Collapse } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

interface SideNavigationProps {
    drawerOpen: boolean;
    toggleDrawer: () => void;
    drawerWidth: number; // Adding this line
}

const SideNavigation: React.FC<SideNavigationProps> = ({ drawerOpen, toggleDrawer, drawerWidth }) => {
    function SplitText({ text, show }: { text: string; show: boolean }) {
        return (
            <span
                style={{
                    opacity: show ? 1 : 0,
                    animation: show ? "fadeIn 0.5s forwards" : "fadeOut 0.5s forwards",
                }}
            >
                {text}
            </span>
        );
    }

    return (
        <Drawer
            variant="permanent"
            open={drawerOpen}
            sx={{
                width: drawerOpen ? `${drawerWidth}px` : 60, // Adjusted to use `drawerWidth`
                flexShrink: 0,
                whiteSpace: "nowrap",
                overflowX: "hidden",
                marginTop: 64,
                transition: (theme) =>
                    theme.transitions.create("width", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                "& .MuiDrawer-paper": {
                    width: drawerOpen ? `${drawerWidth}px` : 60, // Adjusted to use `drawerWidth`
                    transition: (theme) =>
                        theme.transitions.create("width", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                },
            }}
            PaperProps={{
                style: {
                    width: drawerOpen ? `${drawerWidth}px` : 60,
                    marginTop: 64, // to push it below AppBar
                    transition: "width 0.3s",
                },
            }}
        >
            <IconButton onClick={toggleDrawer}>
                <MenuIcon />
            </IconButton>
            <List>
                <ListItem
                    button
                    component="a"
                    href="https://github.com/srbvik92"
                >
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <Typography variant="body1">
                            <SplitText
                                text="GitHub"
                                show={drawerOpen}
                            />
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem
                    button
                    component="a"
                    href="https://www.linkedin.com/in/saurabd/"
                >
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <Typography variant="body1">
                            <SplitText
                                text="LinkedIn"
                                show={drawerOpen}
                            />
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideNavigation;
