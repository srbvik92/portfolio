import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Skills", to: "/skills" },
    { label: "About", to: "/about-me" },
    { label: "Contact", to: "/contact" },
];

const TopNavigation: React.FC = () => {
    const location = useLocation();

    return (
        <AppBar
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{
                background: "rgba(247, 242, 234, 0.72)",
                backdropFilter: "blur(18px)",
                borderBottom: "1px solid rgba(15, 76, 92, 0.10)",
            }}
        >
            <Toolbar
                sx={{
                    maxWidth: "1200px",
                    width: "100%",
                    mx: "auto",
                    px: { xs: 1, md: 2 },
                    justifyContent: "space-between",
                    gap: 2,
                }}
            >
                <Box className="reveal-up">
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, color: "primary.main", letterSpacing: "0.02em" }}
                    >
                        Saurabh
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{ color: "text.secondary", display: { xs: "none", sm: "block" } }}
                    >
                        Full Stack Engineer | AI-focused builder
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 0.5, md: 1 },
                        flexWrap: "wrap",
                        justifyContent: "flex-end",
                    }}
                >
                    {navigationItems.map((item) => {
                        const active = location.pathname === item.to;

                        return (
                            <Button
                                key={item.to}
                                component={Link}
                                to={item.to}
                                color="primary"
                                variant={active ? "contained" : "text"}
                                className="reveal-up"
                                sx={{
                                    minWidth: "auto",
                                    px: { xs: 1.5, md: 2 },
                                    color: active ? "white" : "primary.main",
                                    position: "relative",
                                    overflow: "hidden",
                                    "&::after": active
                                        ? undefined
                                        : {
                                              content: '""',
                                              position: "absolute",
                                              left: 14,
                                              right: 14,
                                              bottom: 8,
                                              height: 2,
                                              borderRadius: 999,
                                              backgroundColor: "primary.main",
                                              transform: "scaleX(0)",
                                              transformOrigin: "left center",
                                              transition: "transform 180ms ease",
                                          },
                                    "&:hover::after": active ? undefined : { transform: "scaleX(1)" },
                                }}
                            >
                                {item.label}
                            </Button>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopNavigation;
