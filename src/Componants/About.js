import { Container } from '@mui/material'
import { Box } from '@mui/system'
import {Grid ,Button } from  "@mui/material";
import React from 'react'
import About from '../Componants/About.css'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import aboutimg from '../Images/aboutimg2.png'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export default function about() {
  return (
    <div className='about'>
    <Container>
    <div className='heading'>
    <h3> Why dose your business need AgencyCo</h3>
    <p>Following reasons show advantages of adding AgencyCo to your lead pages,<br/> demos and checkout</p>
    </div>
    <Grid container spacing={2}>
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
    <Grid container spacing={2} bgcolor='rgb(228, 220, 207)' mt='2rem'>
    <Grid item xs={6} md={6}>
    <div className='about_details'>
    <h5><span style={{color:'red'}}>About us</span></h5>
    <h3>We help drive your business forward faster</h3>
    <p>Proactively syndicate open-source e-markets after low-risk high-yied synergy. professionally simplify visionary technology before team driven sources.</p>
    <Grid container spacing={2}>
    <Grid item xs={6} md={6}>
    <div className='conversion'>
    <div >
    <SignalCellularAltIcon/>
    </div>
    <h5>increase conversion</h5>
    </div>
    <p>Display recent conversions, bulid creadibity  and trust</p>
    </Grid>
    <Grid item xs={6} md={6} >
    <div className='conversion'>
    <div >
    <ArrowUpwardIcon/>
    </div>
    <h5>Product analytics</h5>
    </div>
    <p>A  top promo bar that  counts down until  a few  discounts.</p>
    </Grid>
    <Grid item xs={6} md={6}>
    <div className='conversion'>
    <div >
    <SignalCellularAltIcon/>
    </div>
    <h5>Discussion for idea</h5>
    </div>
    <p>Enthusiastically coordinate competitive users vis-a-vis results.</p>
    </Grid>
    <Grid item xs={6} md={6}>
    <div className='conversion'>
    <div >
    <SignalCellularAltIcon/>
    </div>
    <h5>Perfect testing</h5>
    </div>
    <p>Credibly evisculate covalent  quality vectors and maintainable</p>
    </Grid>
    </Grid>
    <Button variant="contained" color="success">
  view Details
</Button>
    </div>
    </Grid>
    <Grid item xs={6} md={6}>
    <div className='about_images'>
    <img src={aboutimg} alt ="about"/>
    </div>
    </Grid>
    <div className='video-overview'>
    <PlayCircleFilledIcon />
    <p> watch video overview</p>

    </div>
    </Grid>
  

    </Container>
    </div>
  )
}
