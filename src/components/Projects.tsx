import React from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";

const academicProjects = [
    {
        title: "Implementation of Neural Arc Standard Dependency Parser",
        date: "Fall 2022",
        description: "Designed a machine learning-based parser predicting actions with 76-87% accuracy for different languages.",
        technologies: "Python, Pytorch, pandas, NumPy",
    },
    {
        title: "Sentiment Analysis of Tweets Using Machine Learning Model",
        date: "Fall 2022",
        description: "Achieved an 81% accuracy in sentiment classification using advanced machine learning models.",
        technologies: "Python, TensorFlow, pandas, NumPy, scikit-learn",
    },
    {
        title: "Classifying Emails as Spam or Ham",
        date: "Fall 2022",
        description: "Developed a model achieving 96% accuracy in classifying emails as spam or ham.",
        technologies: "Python, TensorFlow, pandas, NumPy, scikit-learn",
    },
    {
        title: "Credit Card Approval Prediction",
        date: "Spring 2022",
        description: "Created a model that can predict the credit card approval with an accuracy of 89%.",
        technologies: "Python, pandas, NumPy, scikit-learn, Matplotlib",
    },
    {
        title: "Analysis of GPU Performance",
        date: "Spring 2022",
        description: "Analysed performance of TensorFlow on different Nvidia GPUs by running TensorFlow Profiler.",
        technologies: "Python, TensorFlow-GPU, TensorFlow Profiler",
    },
    {
        title: "Fatcent (Machine Learning Model for Stock Price Prediction)",
        date: "Fall 2021",
        description: "Developed a stock prediction model whose predictions closely followed the actual stock price graph, providing valuable investment insights.",
        technologies: "Python, TensorFlow, NumPy, Matplotlib",
    },
    {
        title: "Computer Graphics Coursework Projects",
        date: "Fall 2021",
        description: "Completed advanced projects on ray tracing, shading, and rasterization, mesh fairing, Flock simulation and Seam Carving.",
        technologies: "C++",
    },
];

const AcademicProjects: React.FC = () => {
    return (
        <Box
            id="academic-projects"
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingY={6}
            style={{ backgroundColor: "#f9f9f9" }}
        >
            {/* Section Title */}
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                style={{
                    fontWeight: 700,
                    color: "#2c3e50",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #3f51b5",
                    display: "inline-block",
                    paddingBottom: "10px",
                }}
            >
                Academic Projects
            </Typography>

            {/* Projects List */}
            <Box
                maxWidth="800px"
                width="100%"
                display="flex"
                flexDirection="column"
                gap={4}
                paddingX={2}
            >
                {academicProjects.map((project, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        style={{
                            padding: "20px",
                            borderRadius: "8px",
                            backgroundColor: "white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        {/* Project Title */}
                        <Typography
                            variant="h5"
                            style={{
                                fontWeight: 600,
                                color: "#3f51b5",
                                marginBottom: "8px",
                            }}
                        >
                            {project.title}
                        </Typography>

                        {/* Project Date */}
                        <Typography
                            variant="body2"
                            style={{
                                fontWeight: 500,
                                color: "#888",
                                marginBottom: "12px",
                            }}
                        >
                            {project.date}
                        </Typography>

                        {/* Project Description */}
                        <Typography
                            variant="body1"
                            style={{
                                color: "#444",
                                marginBottom: "12px",
                                lineHeight: 1.6,
                            }}
                        >
                            {project.description}
                        </Typography>

                        {/* Technologies Used */}
                        <Typography
                            variant="body2"
                            style={{
                                color: "#555",
                                fontWeight: 500,
                            }}
                        >
                            <strong>Technologies used:</strong> {project.technologies}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default AcademicProjects;
