import React from "react";
import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const contactItems = [
    {
        label: "Email",
        value: "saurabd1@umbc.edu",
        href: "mailto:saurabd1@umbc.edu",
        icon: <Email />,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/saurabd",
        href: "https://linkedin.com/in/saurabd",
        icon: <LinkedIn />,
    },
    {
        label: "GitHub",
        value: "github.com/srbvik92",
        href: "https://github.com/srbvik92",
        icon: <GitHub />,
    },
];

const Contact: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
            <Paper
                sx={{
                    p: { xs: 3, md: 5 },
                    background:
                        "linear-gradient(160deg, rgba(255,255,255,0.82) 0%, rgba(244, 238, 228, 0.92) 100%)",
                }}
            >
                <Stack spacing={2.5}>
                    <Box>
                        <Typography variant="h3" sx={{ mb: 1 }}>
                            Let's Connect
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                            If you want to talk about backend engineering, AI-powered products, full stack opportunities, or an interesting software problem, I would be glad to connect.
                        </Typography>
                    </Box>

                    <Stack spacing={2}>
                        {contactItems.map((item) => (
                            <Paper
                                key={item.label}
                                elevation={0}
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: { xs: "flex-start", sm: "center" },
                                    flexDirection: { xs: "column", sm: "row" },
                                    gap: 2,
                                    backgroundColor: "rgba(255,255,255,0.78)",
                                    border: "1px solid rgba(15, 76, 92, 0.08)",
                                }}
                            >
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <Box
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "14px",
                                            display: "grid",
                                            placeItems: "center",
                                            backgroundColor: "rgba(15, 76, 92, 0.10)",
                                            color: "primary.main",
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            {item.label}
                                        </Typography>
                                        <Typography variant="h6">{item.value}</Typography>
                                    </Box>
                                </Stack>

                                <Button
                                    component="a"
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    variant="outlined"
                                    color="primary"
                                >
                                    Open
                                </Button>
                            </Paper>
                        ))}
                    </Stack>
                </Stack>
            </Paper>
        </Container>
    );
};

export default Contact;
