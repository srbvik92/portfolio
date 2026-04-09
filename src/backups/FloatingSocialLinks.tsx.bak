// FloatingSocialLinks.tsx
import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FloatingSocialLinks: React.FC = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                top: 70,
                right: 16,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                zIndex: 1000, // Ensures the component stays on top of other elements
            }}
        >
            <Tooltip
                title="GitHub"
                placement="left"
            >
                <IconButton
                    color="primary"
                    href="https://github.com/srbvik92"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </IconButton>
            </Tooltip>
            <Tooltip
                title="LinkedIn"
                placement="left"
            >
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
    );
};

export default FloatingSocialLinks;
