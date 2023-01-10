import React from 'react';
import './App.css';
import {Input} from "./Input";
import {Grid} from "@mui/material";
import { GraphBox } from './GraphTemp';

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Input name="Interessefilter!" submit="Kjør" />
      </Grid>
      <Grid item xs={8}>
          <GraphBox/>
      </Grid>
    </Grid>
  );
}

export default App;
