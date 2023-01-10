import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type InputProps = {
  name: string,
  submit: string
}

export const Input = ({name, submit}: InputProps) =>
    <Container maxWidth="sm">
        <Box sx={{
            width: 800,
            height: 100,
            backgroundColor: 'primary.dark',
        }}>
            <div className="cntdiv">
                <Typography variant="h4" component="h1" gutterBottom>
                    <span style={{color: "white"}}>{name}</span></Typography>
                <input type="text" name="name" />
                &nbsp; &nbsp;
                <Button variant="contained">{submit}</Button>
            </div>
        </Box>
    </Container>