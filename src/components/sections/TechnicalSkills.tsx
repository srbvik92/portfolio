import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';  // Using Web for React representation
import StorageIcon from '@mui/icons-material/Storage';  // For Database representation (MySQL)
import WebAssetIcon from '@mui/icons-material/WebAsset';  // For Express
import CoffeeIcon from '@mui/icons-material/Coffee';  // For Java
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';  // For Hibernate ORM

const TechnicalSkills: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">Technical Skills</Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <WebIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="React" secondary="Frontend library for building user interfaces." />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <WebAssetIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Express" secondary="Minimalist web framework for Node.js." />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <StorageIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Node.js" secondary="JavaScript runtime for backend development." />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <StorageIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="MySQL" secondary="Relational database system." />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CoffeeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Java" secondary="Object-oriented programming language." />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <StorageOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Hibernate ORM" secondary="Object-relational mapping tool for Java." />
        </ListItem>
      </List>
    </div>
  );
};

export default TechnicalSkills;
