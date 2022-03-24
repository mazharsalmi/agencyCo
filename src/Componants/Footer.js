import React from "react";
import footer from "../Componants/Footer.css";
import { Button, Container, Grid } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';
import logo from '../Images/logo.png'
export default function Footer() {
  return (
    <div className="footer"> 
    <Container>
      <Grid container spacing={2} className="footer-details">
        <Grid item xs={4} md={4} sm={10} xs={10} className="footer-section">
        <img src={logo} alt='logo'/>
          <p>
            Holisticly empower premium architecutres without value-added ideas.
            Seamlessy evolve cross-platform experiences adn open-source
            meta-services.
          </p>
          <p>
            <NextPlanOutlinedIcon /> Privacy policy <NextPlanOutlinedIcon />
            Terms and Conditions
          </p>
        </Grid>
        <Grid item xs={4} md={4} sm={5} xs={5}>
          <h3>Our location</h3>
          <p>
            <NextPlanOutlinedIcon />
            Address:121 king melbourme
          </p>
          <p> Australia 3000</p>
          <p>
            <NextPlanOutlinedIcon />
            Phon:+6137678
          </p>
          <p>
            <NextPlanOutlinedIcon />
            Email:mail@example.com
          </p>
        </Grid>
        <Grid item xs={4} md={4} sm={5} xs={5}>
          <h3>Quick links</h3>
          <p>
            <NextPlanOutlinedIcon />
            About us
          </p>
          <p>
            <NextPlanOutlinedIcon />
            Our Service
          </p>
          <p>
            <NextPlanOutlinedIcon />
            pricing
          </p>
          <p>
            <NextPlanOutlinedIcon />
            Contact us
          </p>
        </Grid>
      </Grid>
      
      <div className="copyrights">
      <h5>Copyrights <CopyrightIcon/> 2019. All rights reserved by <span style={{color:'blue'}}>ThemsTags</span></h5>
      <div className="footer_icon">
      <FacebookIcon/>
      <TwitterIcon/>
      <InstagramIcon/>
      </div>
      </div>
      </Container>
    </div>
  );
}
