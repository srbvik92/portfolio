import React from "react";
import { Avatar, Box, Button, Card, CardContent, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { ArrowForward, Description, Insights, Storage, SmartToy } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { experienceData } from "../data/experienceData";
import saurabh from "../image/saurabh.jpeg";

const educationData = [
    {
        institution: "University of Maryland, Baltimore County",
        degree: "M.S. in Computer Science",
        dates: "2021 - 2023",
        details: "Machine Learning, NLP, Algorithms, AI, and advanced software systems.",
    },
    {
        institution: "National Institute of Technology, Raipur",
        degree: "B.Tech. in Computer Science",
        dates: "2010 - 2014",
        details: "Strong foundations in software engineering, systems thinking, and problem solving.",
    },
];

const spotlightMetrics = [
    { label: "Current focus", value: "AI systems + full stack delivery" },
    { label: "Role", value: "Technical Lead and hands-on engineer" },
    { label: "Strength", value: "Shipping practical software with clean architecture" },
];

const quickStats = [
    { label: "Stack", value: "React, Node.js, MySQL, Redis" },
    { label: "Style", value: "Hands-on delivery with technical ownership" },
    { label: "Interest", value: "AI products, backend systems, full stack engineering" },
];

const coreStrengths = [
    {
        title: "Backend systems",
        description:
            "I build APIs, data models, queues, caching layers, and production-minded services that stay understandable under growth.",
        icon: <Storage color="primary" />,
    },
    {
        title: "AI application engineering",
        description:
            "I work on retrieval, summarization, async job flows, and evaluation-friendly AI features that remain practical to demo and explain.",
        icon: <SmartToy color="primary" />,
    },
    {
        title: "Technical ownership",
        description: "I enjoy shaping architecture, guiding delivery, and turning ambiguous product ideas into clear engineering plans.",
        icon: <Insights color="primary" />,
    },
];

const Landing: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: { xs: 3, md: 5 }, mb: 6 }}>
            <Paper
                elevation={0}
                className="reveal-up"
                sx={{
                    overflow: "hidden",
                    background:
                        "linear-gradient(135deg, rgba(15, 76, 92, 0.96) 0%, rgba(35, 62, 87, 0.92) 52%, rgba(201, 123, 99, 0.86) 100%)",
                    color: "white",
                    p: { xs: 3, md: 5 },
                    borderRadius: 6,
                    position: "relative",
                    mb: 4,
                }}
            >
                <Box
                    className="float-glow"
                    sx={{
                        position: "absolute",
                        top: -120,
                        right: -80,
                        width: 280,
                        height: 280,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 70%)",
                        pointerEvents: "none",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(circle at top right, rgba(255,255,255,0.24), transparent 24%), radial-gradient(circle at bottom left, rgba(255,255,255,0.12), transparent 28%)",
                        pointerEvents: "none",
                    }}
                />
                <Grid container spacing={4} alignItems="center" sx={{ position: "relative" }}>
                    <Grid item xs={12} md={8}>
                        <Stack spacing={2.5}>
                            <Chip
                                className="reveal-up reveal-delay-1"
                                label="Available for strong backend and full stack opportunities"
                                sx={{
                                    alignSelf: "flex-start",
                                    backgroundColor: "rgba(255,255,255,0.16)",
                                    color: "white",
                                    fontWeight: 600,
                                    border: "1px solid rgba(255,255,255,0.18)",
                                }}
                            />
                            <Typography className="reveal-up reveal-delay-1" variant="h4">
                                Full Stack Engineer building AI-powered and production-minded web systems.
                            </Typography>
                            <Typography
                                className="reveal-up reveal-delay-2"
                                variant="h6"
                                sx={{ color: "rgba(255,255,255,0.86)", maxWidth: 760, fontWeight: 400, lineHeight: 1.6 }}
                            >
                                I design and ship systems across React, Node.js, MySQL, Redis, and modern AI workflows, with a focus on
                                clear architecture, reliable delivery, and features that solve real product needs.
                            </Typography>
                            <Stack className="reveal-up reveal-delay-3" direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                                <Button component={Link} to="/projects" variant="contained" color="secondary" endIcon={<ArrowForward />}>
                                    View Projects
                                </Button>
                                <Button
                                    component="a"
                                    href="mailto:saurabd1@umbc.edu?subject=Resume%20Request"
                                    variant="outlined"
                                    startIcon={<Description />}
                                    sx={{ color: "white", borderColor: "rgba(255,255,255,0.45)" }}
                                >
                                    Request Resume
                                </Button>
                                <Button component={Link} to="/contact" variant="text" sx={{ color: "white" }}>
                                    Contact Me
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2} alignItems={{ xs: "flex-start", md: "center" }} className="reveal-up reveal-delay-2">
                            <Avatar
                                alt="Saurabh"
                                src={saurabh}
                                sx={{
                                    width: 164,
                                    height: 164,
                                    border: "4px solid rgba(255,255,255,0.28)",
                                    boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
                                }}
                            />
                            <Paper
                                elevation={0}
                                sx={{
                                    width: "100%",
                                    p: 2,
                                    backgroundColor: "rgba(255,255,255,0.10)",
                                    color: "white",
                                    border: "1px solid rgba(255,255,255,0.16)",
                                }}
                            >
                                <Stack spacing={1.5}>
                                    {spotlightMetrics.map((item) => (
                                        <Box key={item.label}>
                                            <Typography
                                                variant="caption"
                                                sx={{ opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.08em" }}
                                            >
                                                {item.label}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                {item.value}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>

            <Paper
                className="reveal-up reveal-delay-2"
                sx={{
                    p: { xs: 2.5, md: 3 },
                    mb: 5,
                    backgroundColor: "rgba(255,255,255,0.66)",
                }}
            >
                <Grid container spacing={2}>
                    {quickStats.map((item) => (
                        <Grid item xs={12} md={4} key={item.label}>
                            <Box>
                                <Typography
                                    variant="caption"
                                    sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.08em" }}
                                >
                                    {item.label}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 0.5, fontWeight: 700 }}>
                                    {item.value}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            <Grid container spacing={3} sx={{ mb: 5 }}>
                {coreStrengths.map((strength, index) => (
                    <Grid item xs={12} md={4} key={strength.title}>
                        <Paper
                            className={`surface-hover reveal-up reveal-delay-${index + 1}`}
                            sx={{ p: 3, height: "100%", backgroundColor: "rgba(255,255,255,0.72)" }}
                        >
                            <Stack spacing={1.5}>
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        display: "grid",
                                        placeItems: "center",
                                        borderRadius: "14px",
                                        backgroundColor: "rgba(15, 76, 92, 0.10)",
                                    }}
                                >
                                    {strength.icon}
                                </Box>
                                <Typography variant="h5">{strength.title}</Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                    {strength.description}
                                </Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper
                        className="reveal-up reveal-delay-1"
                        sx={{ p: { xs: 3, md: 4 }, mb: 3, backgroundColor: "rgba(255,255,255,0.74)" }}
                    >
                        <Typography variant="h4" sx={{ mb: 1.5 }}>
                            Experience
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                            I enjoy roles where I can combine implementation depth with technical ownership, especially across backend
                            systems, full stack product development, and AI-enabled experiences.
                        </Typography>
                        <Stack spacing={2.5}>
                            {experienceData.map((experience) => (
                                <Card
                                    key={`${experience.role}-${experience.company}`}
                                    elevation={0}
                                    className="surface-hover"
                                    sx={{ backgroundColor: "rgba(15, 76, 92, 0.04)", border: "1px solid rgba(15, 76, 92, 0.10)" }}
                                >
                                    <CardContent>
                                        <Stack spacing={1}>
                                            <Typography variant="h6" color="primary.main">
                                                {experience.role}
                                            </Typography>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                {experience.company}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {experience.dates}
                                            </Typography>
                                            <Box>
                                                {experience.responsibilities.map((responsibility) => (
                                                    <Typography
                                                        key={responsibility}
                                                        variant="body2"
                                                        sx={{ color: "text.secondary", lineHeight: 1.8, mb: 0.5 }}
                                                    >
                                                        {`� ${responsibility}`}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper className="reveal-up reveal-delay-2" sx={{ p: { xs: 3, md: 4 }, backgroundColor: "rgba(255,255,255,0.74)" }}>
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Education
                        </Typography>
                        <Stack spacing={2.5}>
                            {educationData.map((edu) => (
                                <Box key={edu.degree}>
                                    <Typography variant="h6" color="primary.main">
                                        {edu.degree}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 0.5 }}>
                                        {edu.institution}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
                                        {edu.dates}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                        {edu.details}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Landing;
