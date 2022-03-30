import React from "react";
import { Button,Container, Grid } from "@mui/material";
import service from "../Componants/service.css";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ourservies from "../Images/services.png"


export default function Service() {
  return (
  
    <Grid container className="servies"  >
    <Grid item xs={12} md={6} sm={12} >
    <div className='about_details'>
    <h5><span style={{color:'#FF8675'}}>Our Service</span></h5>
    <h2>We help drive your business forward faster</h2>
    <p>Proactively syndicate open-source e-markets after low-risk high-yied synergy. professionally simplify visionary technology before team driven sources.</p>
    
    <Grid container spacing={2}>
    <Grid item xs={12} md={6} sm={12} >
    <div className='conversion'>
    <div className='icon' >
    <SignalCellularAltIcon/>
    </div>
     <h5>increase conversion</h5>
    </div>
    <div>
    <p>Display recent conversions, bulid creadibity  and trust</p>
   </div>
    </Grid>
    <Grid item xs={12} md={6} sm={12} >
    <div className='conversion'>
    <div className='icon' >
    <SignalCellularAltIcon/>
    </div>
     <h5>increase conversion</h5>
    </div>
    <div>
    <p>Display recent conversions, bulid creadibity  and trust</p>
   </div>
    </Grid>
    <Grid item xs={12} md={6} sm={12} >
    <div className='conversion'>
    <div className='icon' >
    <SignalCellularAltIcon/>
    </div>
     <h5>increase conversion</h5>
    </div>
    <div>
    <p>Display recent conversions, bulid creadibity  and trust</p>
   </div>
    </Grid>
    <Grid item xs={12} md={6} sm={12} >
    <div className='conversion'>
    <div className='icon' >
    <SignalCellularAltIcon/>
    </div>
     <h5>increase conversion</h5>
    </div>
    <div>
    <p>Display recent conversions, bulid creadibity  and trust</p>
   </div>
    </Grid>
    
    </Grid>
    </div>
    </Grid>
    <Grid item xs={6} md={6} sm={12} xs={12}>
    <div className='services_images'>
    <img src={ourservies} alt ='servies'/>
    </div>
    </Grid>
    
         </Grid> 
  
  );
}
