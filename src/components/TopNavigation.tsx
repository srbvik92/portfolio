import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const TopNavigation: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                {/* Left - Name */}
                {/* <div style={{ display: "flex" }}>
                    <Typography variant="h6">Saurabh</Typography>
                </div> */}

                {/* Center - Links */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexGrow: 1,
                    }}
                >
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        href="skills"
                    >
                        Skills
                    </Button>
                    <Button
                        color="inherit"
                        href="projects"
                    >
                        Projects
                    </Button>
                    <Button
                        color="inherit"
                        href="about-me"
                    >
                        About Me
                    </Button>
                </div>

                {/* Right - About Me & Contact */}
                {/* <div style={{ display: "flex" }}>
                    <Button
                        color="inherit"
                        href="#contact"
                    >
                        Contact
                    </Button>
                </div> */}
            </Toolbar>
        </AppBar>
    );
};

export default TopNavigation;
