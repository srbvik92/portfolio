import React from "react";
import { Typography, Container, Box, Paper, Avatar, Card, CardContent } from "@mui/material";
import { experienceData } from "../data/experienceData";
import saurabh from "../image/saurabh.jpeg";

// Sample education data. Replace or adjust the information as needed.
const educationData = [
    {
        institution: "University of Maryland, Baltimore County",
        degree: "M.S. in Computer Science",
        dates: "Aug 2021 - May 2023",
        details: ["Coursework: Design and Analysis of Algorithms, Machine Learning, Natural Language Processing, Artificial Intelligence"],
    },
    {
        institution: "National Institute of Technology, Raipur",
        degree: "B.Tech. in Computer Science",
        dates: "2010 - 2014",
        details: ["Active in coding clubs and hackathons"],
    },
];

const Landing: React.FC = () => {
    return (
        <Container
            maxWidth="md"
            style={{ marginTop: "40px" }}
        >
            {/* Profile Section */}
            <Paper
                elevation={4}
                style={{
                    padding: "24px",
                    marginBottom: "40px",
                    backgroundColor: "#f7f9fc",
                    borderRadius: "10px",
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* Name and Title */}
                    <Box>
                        <Typography
                            variant="h3"
                            style={{ fontWeight: 700, color: "#2c3e50", marginBottom: "8px" }}
                        >
                            Saurabh
                        </Typography>
                        <Typography
                            variant="body1"
                            style={{ color: "#555", fontSize: "18px" }}
                        >
                            Full Stack Engineer | Technical Lead | M.Sc. Computer Science from UMBC
                        </Typography>
                    </Box>

                    {/* Profile Picture */}
                    <Avatar
                        alt="Saurabh"
                        src={saurabh}
                        style={{
                            width: "150px",
                            height: "150px",
                            border: "4px solid #ddd",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </Box>
            </Paper>

            {/* Experience Section */}
            <Typography
                variant="h4"
                style={{
                    fontWeight: 700,
                    color: "#2c3e50",
                    marginBottom: "16px",
                    borderBottom: "2px solid #3f51b5",
                    display: "inline-block",
                    paddingBottom: "4px",
                }}
            >
                Experience
            </Typography>
            <Box>
                {experienceData.map((experience, index) => (
                    <Card
                        key={index}
                        elevation={3}
                        style={{
                            marginBottom: "24px",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "10px",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                style={{ fontWeight: 600, color: "#2c3e50", marginBottom: "4px" }}
                            >
                                {experience.role}
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ fontSize: "14px", color: "#888", marginBottom: "8px" }}
                            >
                                {experience.company}
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ color: "#888", fontSize: "12px", marginBottom: "16px" }}
                            >
                                {experience.dates}
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{ fontSize: "16px", color: "#444", lineHeight: "1.6" }}
                            >
                                {experience.responsibilities.map((responsibility, i) => (
                                    <div key={i}>- {responsibility}</div>
                                ))}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Education Section */}
            <Typography
                variant="h4"
                style={{
                    fontWeight: 700,
                    color: "#2c3e50",
                    marginBottom: "16px",
                    borderBottom: "2px solid #3f51b5",
                    display: "inline-block",
                    paddingBottom: "4px",
                    marginTop: "40px",
                }}
            >
                Education
            </Typography>
            <Box>
                {educationData.map((edu, index) => (
                    <Card
                        key={index}
                        elevation={3}
                        style={{
                            marginBottom: "24px",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "10px",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                style={{ fontWeight: 600, color: "#2c3e50", marginBottom: "4px" }}
                            >
                                {edu.degree}
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ fontSize: "14px", color: "#888", marginBottom: "8px" }}
                            >
                                {edu.institution}
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ color: "#888", fontSize: "12px", marginBottom: "16px" }}
                            >
                                {edu.dates}
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{ fontSize: "16px", color: "#444", lineHeight: "1.6" }}
                            >
                                {edu.details.map((detail, i) => (
                                    <div key={i}>- {detail}</div>
                                ))}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default Landing;
