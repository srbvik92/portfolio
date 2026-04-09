import React from "react";
import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FloatingSocialLinks: React.FC = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "fixed",
                right: { xs: 12, md: 20 },
                bottom: { xs: 14, md: 20 },
                zIndex: 1200,
                borderRadius: 999,
                px: 1,
                py: 0.5,
                backgroundColor: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(15, 76, 92, 0.10)",
            }}
        >
            <Box sx={{ display: "flex", gap: 0.5 }}>
                <Tooltip title="GitHub">
                    <IconButton
                        color="primary"
                        href="https://github.com/srbvik92"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                    <IconButton
                        color="primary"
                        href="https://linkedin.com/in/saurabd"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Paper>
    );
};

export default FloatingSocialLinks;
