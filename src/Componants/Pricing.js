import React from 'react'
import pricing from '../Componants/Pricing.css'
import {Grid,Box,Divider,Button} from "@mui/material"

export default function Pricing() {
  return (
    <div className='pricing'>
    <Grid container spacing={1} justifyContent='center'>
    <Grid item xs={10} md={10} sm={10}>
<h2> Pricing Packages</h2>
<p>Uniquely maintain efficient expertise whereas cross functional deliverables. Continually <br/> leverage other competitve mind share whereas enabled channels.</p>

</Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">

        <Grid item xs={10} md={3}  sm={10}>
        <Box className='pricing-detail'>
         <div id='doller'>
         <h1>$29</h1>
        <h6>Basic License</h6></div>
        <Divider />
        <div id='card-body'>
        <li>Push Notifications</li>
        <li>Data Transfer</li>
        <li>SQL Database</li>
        <li>Search & SEO  Analytics</li>
        <li>24/7 Phone Support</li>
        <li>2 month technical support</li>
        <li>2 + profitable keyword</li>
        <Button variant="contained">Purchase now</Button>
        </div>
        </Box>
        </Grid>
        <Grid item xs={10} md={3}  sm={10}>
        <Box className='pricing-detail'>
         <div id='doller'>
         <h1>$29</h1>
        <h6>Basic License</h6></div>
        <Divider />
        <div id='card-body'>
        <li>Push Notifications</li>
        <li>Data Transfer</li>
        <li>SQL Database</li>
        <li>Search & SEO  Analytics</li>
        <li>24/7 Phone Support</li>
        <li>2 month technical support</li>
        <li>2 + profitable keyword</li>
        <Button variant="contained">Purchase now</Button>
        </div>
        </Box>
        </Grid>
        <Grid item xs={10} md={3}  sm={10}>
        <Box className='pricing-detail'>
         <div id='doller'>
         <h1>$29</h1>
        <h6>Basic License</h6></div>
        <Divider />
        <div id='card-body'>
        <li>Push Notifications</li>
        <li>Data Transfer</li>
        <li>SQL Database</li>
        <li>Search & SEO  Analytics</li>
        <li>24/7 Phone Support</li>
        <li>2 month technical support</li>
        <li>2 + profitable keyword</li>
        <Button variant="contained">Purchase now</Button>
        </div>
        </Box>
        </Grid>
        </Grid>
        <p  style={{marginTop:'1rem'}}> if you need custom services or Need more? <span style={{ color:'red'}}>Contact us</span></p>
    </div>
  )
}
