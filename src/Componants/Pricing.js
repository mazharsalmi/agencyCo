import React from 'react'
import pricing from '../Componants/Pricing.css'
import {Grid,Box,Divider,Button} from "@mui/material"

export default function Pricing() {
  return (
    <div className='pricing'>
    <h2> Pricing Packages</h2>
    <p>Uniquely maintain efficient expertise whereas cross functional deliverables. Continually <br/> leverage other competitve mind share whereas enabled channels.</p>
    <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={10} md={3}  sm={10} >
        <Box className='pricing-detail'>
        <h2>$29</h2>
        <h6>Basic License</h6>
        <Divider />
        <p>Push Notifications</p>
        <p> Data Transfer</p>
        <p>SQL Database</p>
        <p>Search & SEO  Analytics</p>
        <p> 24/7 Phone Support</p>
        <p>2 month technical support</p>
        <p> 2 + profitable keyword</p>
        <Button variant="contained">Purchase now</Button>
        </Box>
        </Grid>
        <Grid item xs={10} md={3}  sm={12}>
        <Box className='pricing-detail'>
        <h2>$29</h2>
        <h6>Basic License</h6>
        <Divider />
        <p>Push Notifications</p>
        <p> Data Transfer</p>
        <p>SQL Database</p>
        <p>Search & SEO  Analytics</p>
        <p> 24/7 Phone Support</p>
        <p>2 month technical support</p>
        <p> 2 + profitable keyword</p>
        <Button variant="contained" color='secondary'>Purchase now</Button>
        </Box>
        </Grid>
        <Grid item xs={10} md={3}  sm={12}>
        <Box className='pricing-detail'>
        <h2>$29</h2>
        <h6>Basic License</h6>
        <Divider />
        <p>Push Notifications</p>
        <p> Data Transfer</p>
        <p>SQL Database</p>
        <p>Search & SEO  Analytics</p>
        <p> 24/7 Phone Support</p>
        <p>2 month technical support</p>
        <p> 2 + profitable keyword</p>
        <Button variant="contained">Purchase now</Button>
        </Box>
        </Grid>
        </Grid>
        <p  style={{marginTop:'1rem'}}> if you need custom services or Need more? <span style={{ color:'red'}}>Contact us</span></p>
    </div>
  )
}
