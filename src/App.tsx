import {Paper} from '@mui/material';
import React from 'react';
import './App.css';
import SkillTree from './skilltree';
import Typography from '@mui/material/Typography';

function App() {
    return (
        <div className="App">
            <Typography variant="h2" component="h1" gutterBottom>
                <span style={{color: "white"}}>Interessefilter for bruker</span></Typography>
            <Paper elevation={3} sx={{margin: "2em"}} >
                <Typography variant="h3" component="h1" gutterBottom>
                    <span style={{color: "#380b0b"}}>Valborg</span></Typography>
                <div style={{height: 800}}>
                    <SkillTree/>
                </div>
            </Paper>
        </div>
    );
}

export default App;
