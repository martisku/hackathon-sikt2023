import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const GraphBox = () =>
    <Container maxWidth="sm">
        <Box sx={{
            width: 1200,
            height: 800,
            backgroundColor: 'secondary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            },
        }}>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
                <span style={{color: "white"}}>test</span></Typography>
        </Box>
    </Container>