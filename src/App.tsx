import {Paper} from '@mui/material';
import React from 'react';
import './App.css';
import SkillTree from './skilltree';

function App() {
    return (
        <div className="App">
            <Paper elevation={3} sx={{margin: "2em"}} >
                <div style={{height: 800}}>
                    <SkillTree/>
                </div>
            </Paper>
        </div>
    );
}

export default App;
