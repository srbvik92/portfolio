import React from "react";
import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const summaryBlocks = [
    {
        title: "What I do",
        content:
            "I build full stack applications with a strong backend foundation, focusing on APIs, data models, performance, reliability, and practical user-facing product features.",
    },
    {
        title: "What I enjoy most",
        content:
            "I like work that sits at the intersection of software engineering, architecture, and delivery. That includes everything from system design and database optimization to frontend implementation and AI-assisted workflows.",
    },
    {
        title: "How I work",
        content:
            "I aim for clear systems, clean code, and honest tradeoffs. I care about building software that is not only functional but also explainable, maintainable, and ready to grow.",
    },
];

const journeyMoments = [
    "Started with a strong computer science foundation at NIT Raipur and later deepened my technical focus through a master's degree in computer science at UMBC.",
    "Took an unconventional early-career path through banking, which strengthened my discipline, ownership mindset, and perspective on how technology supports real operations.",
    "Returned fully to software by pursuing advanced study and then moving into professional full stack engineering work, eventually growing into a lead engineering role.",
    "Today, I focus on building modern web applications and AI-enabled systems with a mix of execution depth and technical leadership.",
];

const AboutMe: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
            <Stack spacing={4}>
                <Paper
                    sx={{
                        p: { xs: 3, md: 5 },
                        background:
                            "linear-gradient(145deg, rgba(255,255,255,0.84) 0%, rgba(243, 247, 249, 0.92) 100%)",
                    }}
                >
                    <Stack spacing={2}>
                        <Typography variant="h3">About Me</Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 840, lineHeight: 1.9 }}>
                            I am a full stack engineer and technical lead with a computer science background, hands-on product development experience, and a growing focus on AI-enabled systems. My work spans frontend, backend, databases, system design, and the kind of practical engineering decisions that help software ship reliably.
                        </Typography>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForward />}
                            sx={{ alignSelf: "flex-start" }}
                        >
                            Get in Touch
                        </Button>
                    </Stack>
                </Paper>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
                        gap: 3,
                    }}
                >
                    {summaryBlocks.map((block) => (
                        <Paper key={block.title} sx={{ p: 3, backgroundColor: "rgba(255,255,255,0.72)" }}>
                            <Typography variant="h5" sx={{ mb: 1.5, color: "primary.main" }}>
                                {block.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                {block.content}
                            </Typography>
                        </Paper>
                    ))}
                </Box>

                <Paper sx={{ p: { xs: 3, md: 4 }, backgroundColor: "rgba(255,255,255,0.72)" }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Journey
                    </Typography>
                    <Stack spacing={1.5}>
                        {journeyMoments.map((moment) => (
                            <Typography key={moment} variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                                {`• ${moment}`}
                            </Typography>
                        ))}
                    </Stack>
                </Paper>
            </Stack>
        </Container>
    );
};

export default AboutMe;
