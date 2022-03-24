import { Container } from '@mui/material'
import { Box, margin } from '@mui/system'
import {Grid ,Button } from  "@mui/material";
import React from 'react'
import About from '../Componants/About.css'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import aboutimg from '../Images/aboutimg2.png'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import labtop from '../Images/cardimg.jpg'

export default function about() {
  return (
    <div className='about'>
    
    <div className='heading '>
    <h3> Why dose your business need AgencyCo</h3>
    <p>Following reasons show advantages of adding AgencyCo to your lead pages,<br/> demos and checkout</p>
    </div>
    <Grid container spacing={4} p='2rem' style={{justifyContent:'center'}} >
    
    <Grid item xs={3} md={3}sm={12} xs={12} >
    <Box className='card'>
    <img src={labtop} alt='labtop'/>
    
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
    </Grid>
    <Grid item xs={3} md={3} sm={12} xs={12}>
    <Box className='card'>
    <img src={labtop} alt='labtop'/>
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
    </Grid>
    <Grid item xs={3} md={3} sm={6} xs={12}>
    <Box className='card'>
    <img src={labtop} alt='labtop'/>
    <h4>Convert traffic into sales</h4>
    <p> Proactively provide access to distinctive quality vectors for adaptive solutions</p>
    </Box>
    </Grid>
    
    </Grid>
    <Grid container spacing={2} bgcolor='#f4f7fa' mt='2rem'>
    <Grid item xs={6} md={6} sm={12} xs={12}>
    <div className='about_details'>
    <h5><span style={{color:'red'}}>About us</span></h5>
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
    
    </Grid>
    <Button variant="contained" >
  view Details
</Button>
    </div>
    </Grid>
    <Grid item xs={6} md={6} sm={12} xs={12}>
    <div className='about_images'>
    <img src={aboutimg} alt ="about"/>
    </div>
    </Grid>
    <div className='video-overview'>
    <PlayCircleFilledIcon />
    <p> watch video overview</p>

    </div>
    </Grid>
  


    </div>
  )
}
