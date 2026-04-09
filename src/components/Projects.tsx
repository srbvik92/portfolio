import React from "react";
import {
    Box,
    Button,
    Chip,
    Container,
    Link as MuiLink,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { GitHub, Launch, SmartToy } from "@mui/icons-material";

interface ProjectItem {
    title: string;
    date: string;
    description: string;
    technologies: string[];
    highlights: string[];
    links?: { label: string; href: string; icon: React.ReactNode }[];
    featured?: boolean;
}

const projects: ProjectItem[] = [
    {
        title: "Knowledge AI",
        date: "2026",
        description:
            "An AI-powered personal knowledge platform for saving notes, generating summaries, running semantic search, and asking grounded questions with note citations.",
        technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Prisma", "Redis", "BullMQ", "OpenAI", "k6"],
        highlights: [
            "Built authenticated notes CRUD, tagging, search, and chat flows with ownership-scoped backend APIs.",
            "Moved summarization and reindexing into BullMQ workers with retries, backoff, metrics, and mock LLM failure simulation.",
            "Added semantic chunking, embeddings, Redis caching, rate limiting, and synthetic load-testing support for portfolio-grade system design depth.",
        ],
        featured: true,
        links: [
            { label: "GitHub", href: "https://github.com/srbvik92", icon: <GitHub fontSize="small" /> },
        ],
    },
    {
        title: "Implementation of Neural Arc Standard Dependency Parser",
        date: "Fall 2022",
        description: "Machine learning parser project predicting actions across languages with 76-87% accuracy.",
        technologies: ["Python", "PyTorch", "pandas", "NumPy"],
        highlights: ["Focused on parsing accuracy, model behavior, and NLP implementation fundamentals."],
    },
    {
        title: "Sentiment Analysis of Tweets Using Machine Learning Model",
        date: "Fall 2022",
        description: "Tweet sentiment classification project reaching 81% accuracy using classical and deep learning approaches.",
        technologies: ["Python", "TensorFlow", "pandas", "NumPy", "scikit-learn"],
        highlights: ["Compared modeling strategies for practical social text classification."],
    },
    {
        title: "Classifying Emails as Spam or Ham",
        date: "Fall 2022",
        description: "Email classification model with 96% accuracy for spam and ham detection.",
        technologies: ["Python", "TensorFlow", "pandas", "NumPy", "scikit-learn"],
        highlights: ["Built and evaluated a high-accuracy supervised classification pipeline."],
    },
    {
        title: "Credit Card Approval Prediction",
        date: "Spring 2022",
        description: "Classification model predicting credit card approval outcomes with 89% accuracy.",
        technologies: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib"],
        highlights: ["Used feature analysis and model evaluation to support business-style decision prediction."],
    },
    {
        title: "Analysis of GPU Performance",
        date: "Spring 2022",
        description: "Performance analysis of TensorFlow workloads across Nvidia GPUs using TensorFlow Profiler.",
        technologies: ["Python", "TensorFlow-GPU", "TensorFlow Profiler"],
        highlights: ["Explored compute behavior and profiling-based performance comparisons."],
    },
    {
        title: "Fatcent",
        date: "Fall 2021",
        description: "Stock price prediction model whose trend closely followed observed market behavior for investment analysis.",
        technologies: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
        highlights: ["Combined forecasting and visualization to communicate model outputs more clearly."],
    },
    {
        title: "Computer Graphics Coursework Projects",
        date: "Fall 2021",
        description: "A set of graphics projects spanning ray tracing, shading, rasterization, mesh fairing, flock simulation, and seam carving.",
        technologies: ["C++"],
        highlights: ["Covered both rendering theory and implementation-heavy graphics fundamentals."],
    },
];

const Projects: React.FC = () => {
    const featuredProject = projects.find((project) => project.featured);
    const supportingProjects = projects.filter((project) => !project.featured);

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
            <Stack spacing={4}>
                <Box>
                    <Typography variant="h3" sx={{ mb: 1 }}>
                        Projects
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.8 }}>
                        A portfolio of full stack, AI, machine learning, and systems work. The featured project below is the clearest example of how I design software with both product usefulness and backend architecture in mind.
                    </Typography>
                </Box>

                {featuredProject && (
                    <Paper
                        sx={{
                            p: { xs: 3, md: 4 },
                            background:
                                "linear-gradient(145deg, rgba(15, 76, 92, 0.96) 0%, rgba(33, 56, 74, 0.92) 100%)",
                            color: "white",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 22%), radial-gradient(circle at bottom left, rgba(201,123,99,0.28), transparent 24%)",
                                pointerEvents: "none",
                            }}
                        />
                        <Stack spacing={2.5} sx={{ position: "relative" }}>
                            <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={2}>
                                <Box>
                                    <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: "wrap" }}>
                                        <Chip label="Featured Project" icon={<SmartToy />} sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white" }} />
                                        <Chip label={featuredProject.date} sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white" }} />
                                    </Stack>
                                    <Typography variant="h3" sx={{ mb: 1.5 }}>
                                        {featuredProject.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ maxWidth: 760, color: "rgba(255,255,255,0.86)", lineHeight: 1.8 }}>
                                        {featuredProject.description}
                                    </Typography>
                                </Box>
                                <Stack direction={{ xs: "row", md: "column" }} spacing={1.5}>
                                    {(featuredProject.links || []).map((link) => (
                                        <Button
                                            key={link.label}
                                            component={MuiLink}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="contained"
                                            color="secondary"
                                            startIcon={link.icon}
                                        >
                                            {link.label}
                                        </Button>
                                    ))}
                                    <Button variant="outlined" sx={{ color: "white", borderColor: "rgba(255,255,255,0.32)" }} startIcon={<Launch />}>
                                        Case Study Ready
                                    </Button>
                                </Stack>
                            </Stack>

                            <Box>
                                {featuredProject.highlights.map((highlight) => (
                                    <Typography key={highlight} variant="body1" sx={{ mb: 1.1, color: "rgba(255,255,255,0.92)", lineHeight: 1.75 }}>
                                        {`• ${highlight}`}
                                    </Typography>
                                ))}
                            </Box>

                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                {featuredProject.technologies.map((tech) => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        sx={{
                                            backgroundColor: "rgba(255,255,255,0.10)",
                                            color: "white",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Stack>
                    </Paper>
                )}

                <Box>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Additional Work
                    </Typography>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                            gap: 3,
                        }}
                    >
                        {supportingProjects.map((project) => (
                            <Paper
                                key={project.title}
                                sx={{
                                    p: 3,
                                    height: "100%",
                                    backgroundColor: "rgba(255,255,255,0.72)",
                                    transition: "transform 180ms ease, box-shadow 180ms ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 28px 48px rgba(31, 41, 51, 0.10)",
                                    },
                                }}
                            >
                                <Stack spacing={1.5}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                        <Typography variant="h5" color="primary.main">
                                            {project.title}
                                        </Typography>
                                        <Chip label={project.date} size="small" sx={{ backgroundColor: "rgba(15, 76, 92, 0.08)", color: "primary.main" }} />
                                    </Stack>
                                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                        {project.description}
                                    </Typography>
                                    {project.highlights.map((highlight) => (
                                        <Typography key={highlight} variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                            {`• ${highlight}`}
                                        </Typography>
                                    ))}
                                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                        {project.technologies.map((tech) => (
                                            <Chip key={tech} label={tech} size="small" sx={{ backgroundColor: "rgba(201, 123, 99, 0.10)", color: "#8a4f3d" }} />
                                        ))}
                                    </Stack>
                                </Stack>
                            </Paper>
                        ))}
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default Projects;
