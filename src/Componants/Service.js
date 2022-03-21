import React from "react";
import { Container, Grid } from "@mui/material";
import service from "../Componants/service.css";
import { Box } from '@mui/system'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export default function Service() {
  return (
    <div className="service-heading">
    
    <Grid container spacing={1}>
    <Grid item xs={12} md={12}>
      <h2>Market your business to own <br/> your market</h2>
      <p>We provide professional services for  grow your business and increases sell digitaal<br/> product</p>
      </Grid>
      <Grid item xs={4} md={4}>
      <Box className='card'>
    <SignalCellularAltIcon/>
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
      </Grid>
      <Grid item xs={4} md={4}>
      <Box className='card'>
    <SignalCellularAltIcon/>
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
      </Grid>
      <Grid item xs={4} md={4}>
      <Box className='card'>
    <SignalCellularAltIcon/>
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
      </Grid>
      <Grid item xs={4} md={4}>
      <Box className='card'>
    <SignalCellularAltIcon/>
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
      </Grid>
      <Grid item xs={4} md={4}>
      <Box className='card'>
    <SignalCellularAltIcon/>
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
      </Grid>
      <Grid item xs={4} md={4}>
      <Box className='card'>
    <SignalCellularAltIcon/>
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
      </Grid>
      </Grid>
      
      </div>
  );
}
