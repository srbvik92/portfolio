import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const PersonalJourney: React.FC = () => {
    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    My Personal Journey
                </Typography>
                
                <Typography variant="body1" paragraph>
                    My passion for computer science ignited during my undergraduate years at NIT Raipur, one of India's esteemed NITs. Completing my degree in 2014, I was brimming with the foundational knowledge and eagerness to apply my skills in the real world.
                </Typography>
                
                <Typography variant="body1" paragraph>
                    Taking a slightly unconventional path, I joined Canara Bank, a reputable Nationalized Bank under the aegis of the Government of India. Over the next two years and four months, my tenure at the bank was instrumental in shaping my professional outlook. It taught me discipline, the value of service, and gave me a distinct perspective on how technology could be employed in various sectors. However, the allure of computer science, especially the domains of Machine Learning and Full Stack Development, was too compelling to resist.
                </Typography>

                <Typography variant="body1" paragraph>
                    Realizing that my heart truly belonged to the world of technology, I made the pivotal decision to further my education. In 2021, I embarked on a transformative journey at the University of Maryland, Baltimore County (UMBC) to pursue my master's degree. This academic venture was both challenging and enlightening, providing me with advanced skills and insights into cutting-edge technological advancements.
                </Typography>

                <Typography variant="body1" paragraph>
                    In 2022, while still a student, fortune favored me with an incredible opportunity to intern as a Software Engineer (Full Stack Development) at Miller Construction Services Inc. This hands-on experience during the Fall '22 and Spring '23 semesters enriched my academic learnings, and I seamlessly merged theory with practical application. The synergy was palpable, and recognizing my potential, Miller Construction Services offered me a full-time position. I enthusiastically commenced my professional journey with them in August 2023.
                </Typography>

                <Typography variant="body1" paragraph>
                    Today, as I look back, every decision, every twist, and turn in my journey has been a stepping stone, shaping me into the dedicated and knowledgeable Full Stack Developer I am. I'm excited about the future and the numerous technological challenges it promises, ready to tackle them head-on.
                </Typography>
            </Paper>
        </Container>
    );
};

export default PersonalJourney;
