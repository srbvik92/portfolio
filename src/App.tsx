import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TopNavigation from "./components/TopNavigation";
import SideNavigation from "./components/SideNavigation";

import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingSocialLinks from "./components/FloatingSocialLinks";

const theme = createTheme({
    typography: {
        fontFamily: "'Tisa Sans Pro', sans-serif",
    },
});

const App: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const drawerWidth = 240; // The width you want for your open drawer
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <TopNavigation />
                    {/* <SideNavigation
                        drawerOpen={drawerOpen}
                        toggleDrawer={toggleDrawer}
                        drawerWidth={drawerWidth}
                    /> */}
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            width: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)`,
                            marginLeft: `${drawerOpen ? drawerWidth : 0}px`,
                            transition: (theme) =>
                                theme.transitions.create(["margin", "width"], {
                                    easing: theme.transitions.easing.sharp,
                                    duration: theme.transitions.duration.enteringScreen,
                                }),
                        }}
                    >
                        {/* Ensures content is pushed down below the AppBar */}
                        <Toolbar />
                        <Routes>
                            <Route
                                path="/"
                                element={<Landing />}
                            />
                            <Route
                                path="/about-me"
                                element={<AboutMe />}
                            />
                            <Route
                                path="/skills"
                                element={<Skills />}
                            />
                            <Route
                                path="/projects"
                                element={<Projects />}
                            />
                            <Route
                                path="/contact"
                                element={<Contact />}
                            />
                        </Routes>
                    </Box>
                    {/* Place the floating social links outside the main content to always display them */}
                    <FloatingSocialLinks />
                </Box>
            </Router>
        </ThemeProvider>
    );
};

export default App;
