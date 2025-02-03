import React from 'react';
import { Typography, Button, Container } from '@mui/material';

import Education from './sections/Education';
import TechnicalSkills from './sections/TechnicalSkills';
import PersonalJourney from './sections/PersonalJourney';

const AboutMe: React.FC = () => {
  return (
    <Container component="main" maxWidth="md" style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
      
      <Typography variant="h4" gutterBottom>
        Professional Summary
      </Typography>
      
      <Typography variant="body1" paragraph>
        A full-stack developer with over X years of experience...
      </Typography>

      <Education />
      <TechnicalSkills />
      <PersonalJourney />

      <Button variant="contained" color="primary" href="#contact" style={{ marginTop: '20px' }}>
        Let's Connect!
      </Button>
      
    </Container>
  );
};

export default AboutMe;
