import React from "react";
import footer from "../Componants/Footer.css";
import { Button, Grid } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-img">
        <h2>Discover AgencyCo.it's easier than you think.</h2>
        <p>
          progressively deliver market-driven quality vectors rather than
          goal-oriented niche markets.
        </p>
        <Button variant="contained" color="primary">
          Contained
        </Button>
      </div>
      <Grid container spacing={2} className="footer-details" mt={2}>
        <Grid item xs={4} md={4} sm={10} xs={10}>
          <h3>
            <span style={{ color: "blue" }}>AgencyCo</span>
          </h3>
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
      <h3>Copyrights <CopyrightIcon/> 2019. All rights reserved by <span style={{color:'blue'}}>ThemsTags</span></h3>
      <div className="icon">
      <FacebookIcon/>
      <TwitterIcon/>
      <InstagramIcon/>
      </div>
      </div>
    </div>
  );
}
