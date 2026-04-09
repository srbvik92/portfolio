import React from "react";
import { Box, Chip, Container, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaChrome, FaWindows, FaUbuntu } from "react-icons/fa";
import { TbFileTypeHtml, TbBrandCpp } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import {
    SiTensorflow,
    SiPytorch,
    SiMysql,
    SiOracle,
    SiMongodb,
    SiTypescript,
    SiJavascript,
    SiRedux,
    SiNginx,
    SiSpring,
    SiApache,
    SiEclipseide,
    SiNumpy,
    SiPandas,
    SiMacos,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { MdCloud, MdOutlineStorage } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import CIcon from "../icons/icons8-c-programming-48.png";

const technicalSkills = [
    {
        category: "Programming Languages",
        accent: "#0f4c5c",
        skills: [
            { name: "C", description: "Low-level programming for system and performance-focused work.", logo: <img src={CIcon} alt="C programming language" width={32} height={32} /> },
            { name: "C++", description: "Performance-oriented development for systems and graphics.", logo: <TbBrandCpp size={32} color="#00599C" /> },
            { name: "Java", description: "Backend and enterprise application development.", logo: <FaJava size={32} color="#e76f51" /> },
            { name: "Python", description: "AI, scripting, data work, and backend development.", logo: <FaPython size={32} color="#3776AB" /> },
            { name: "R", description: "Statistical computing and exploratory analysis.", logo: <FaJava size={32} color="#4f5d75" /> },
        ],
    },
    {
        category: "Web and Backend",
        accent: "#c97b63",
        skills: [
            { name: "React", description: "Frontend interfaces built with component-driven development.", logo: <FaReact size={32} color="#61DAFB" /> },
            { name: "Node.js", description: "Server-side JavaScript for APIs and application services.", logo: <FaNodeJs size={32} color="#339933" /> },
            { name: "Express", description: "Pragmatic backend framework for APIs and middleware flows.", logo: <FaJava size={32} color="#1f2933" /> },
            { name: "Redux", description: "Predictable state management for larger React applications.", logo: <SiRedux size={32} color="#764ABC" /> },
            { name: "TypeScript", description: "Type-safe JavaScript for more reliable codebases.", logo: <SiTypescript size={32} color="#007ACC" /> },
            { name: "JavaScript", description: "Core language for rich frontend and backend web development.", logo: <SiJavascript size={32} color="#f4c430" /> },
            { name: "Nginx", description: "Reverse proxying and web server configuration.", logo: <SiNginx size={32} color="#009639" /> },
            { name: "REST API", description: "Structured API design for scalable web integrations.", logo: <MdOutlineStorage size={32} color="#0f4c5c" /> },
            { name: "Apache Tomcat", description: "Java server runtime for enterprise-style deployment.", logo: <SiApache size={32} color="#F15C22" /> },
            { name: "Hibernate", description: "ORM support for relational persistence in Java stacks.", logo: <SiSpring size={32} color="#6DB33F" /> },
            { name: "HTML", description: "Structured markup for semantic web content.", logo: <TbFileTypeHtml size={32} color="#e34f26" /> },
            { name: "CSS", description: "Layout, responsive styling, and visual system design.", logo: <FaJava size={32} color="#264de4" /> },
        ],
    },
    {
        category: "Databases and Cloud",
        accent: "#7a8f63",
        skills: [
            { name: "MySQL", description: "Relational data modeling and query optimization.", logo: <SiMysql size={32} color="#4479A1" /> },
            { name: "Oracle", description: "Enterprise database experience in production environments.", logo: <SiOracle size={32} color="#F80000" /> },
            { name: "MongoDB", description: "Flexible document storage for schema-light use cases.", logo: <SiMongodb size={32} color="#47A248" /> },
            { name: "AWS EC2", description: "Cloud compute setup and application hosting.", logo: <MdCloud size={32} color="#FF9900" /> },
            { name: "AWS RDS", description: "Managed relational database infrastructure on AWS.", logo: <MdCloud size={32} color="#FF9900" /> },
            { name: "AWS S3", description: "Object storage for assets and file-based workflows.", logo: <MdCloud size={32} color="#FF9900" /> },
        ],
    },
    {
        category: "Tools and Platforms",
        accent: "#5c5f78",
        skills: [
            { name: "VS Code", description: "Primary editor for modern application development.", logo: <VscTools size={32} color="#007ACC" /> },
            { name: "Visual Studio", description: "Comprehensive IDE for larger application workflows.", logo: <DiVisualstudio size={32} color="#7734eb" /> },
            { name: "Eclipse", description: "IDE support for Java-heavy workflows.", logo: <SiEclipseide size={32} color="#38027d" /> },
            { name: "Git", description: "Version control for collaboration and release workflows.", logo: <FaGitAlt size={32} color="#f1502f" /> },
            { name: "Chrome DevTools", description: "Frontend debugging, performance inspection, and network analysis.", logo: <FaChrome size={32} color="#33799c" /> },
            { name: "Windows", description: "Primary development and productivity environment.", logo: <FaWindows size={32} color="#00a4ef" /> },
            { name: "Linux", description: "Server and command-line oriented operating system workflow.", logo: <FcLinux size={32} /> },
            { name: "Ubuntu", description: "Developer-friendly Linux distribution.", logo: <FaUbuntu size={32} color="#dd4814" /> },
            { name: "MacOS", description: "Familiarity with Apple-based development environments.", logo: <SiMacos size={32} color="#444" /> },
        ],
    },
    {
        category: "Machine Learning",
        accent: "#8a4f3d",
        skills: [
            { name: "TensorFlow", description: "Model training and experimentation for ML systems.", logo: <SiTensorflow size={32} color="#FF6F00" /> },
            { name: "PyTorch", description: "Flexible deep learning experimentation and prototyping.", logo: <SiPytorch size={32} color="#EE4C2C" /> },
            { name: "NumPy", description: "Numerical computation and matrix manipulation.", logo: <SiNumpy size={32} color="#4d77cf" /> },
            { name: "pandas", description: "Data wrangling and analysis for ML and reporting.", logo: <SiPandas size={32} color="#130654" /> },
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
            <Stack spacing={4}>
                <Box>
                    <Typography variant="h3" sx={{ mb: 1 }}>
                        Technical Skills
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.8 }}>
                        My toolkit spans full stack development, backend systems, machine learning, databases, and cloud-oriented delivery. These are the technologies I use most often when turning product ideas into working systems.
                    </Typography>
                </Box>

                {technicalSkills.map((category) => (
                    <Paper key={category.category} sx={{ p: { xs: 3, md: 4 }, backgroundColor: "rgba(255,255,255,0.72)" }}>
                        <Stack spacing={2.5}>
                            <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" spacing={2}>
                                <Box>
                                    <Typography variant="h4" sx={{ color: category.accent, mb: 0.75 }}>
                                        {category.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Practical experience with tools I rely on for delivery, architecture, debugging, and experimentation.
                                    </Typography>
                                </Box>
                                <Chip label={`${category.skills.length} skills`} sx={{ alignSelf: "flex-start", backgroundColor: `${category.accent}14`, color: category.accent, fontWeight: 700 }} />
                            </Stack>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "repeat(2, minmax(0, 1fr))",
                                        sm: "repeat(3, minmax(0, 1fr))",
                                        md: "repeat(4, minmax(0, 1fr))",
                                        lg: "repeat(5, minmax(0, 1fr))",
                                    },
                                    gap: 2,
                                }}
                            >
                                {category.skills.map((skill) => (
                                    <Tooltip title={skill.description} key={skill.name} arrow>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 2,
                                                minHeight: 132,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                backgroundColor: "rgba(255,255,255,0.88)",
                                                border: "1px solid rgba(15, 76, 92, 0.08)",
                                                transition: "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                    borderColor: `${category.accent}66`,
                                                    boxShadow: "0 18px 32px rgba(31, 41, 51, 0.08)",
                                                },
                                            }}
                                        >
                                            <Box sx={{ width: 42, height: 42, display: "grid", placeItems: "center" }}>{skill.logo}</Box>
                                            <Box>
                                                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                    {skill.name}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                                                    {skill.description}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Tooltip>
                                ))}
                            </Box>
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </Container>
    );
};

export default Skills;
