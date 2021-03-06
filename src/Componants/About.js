import { Container } from "@mui/material";
import { Box, margin } from "@mui/system";
import { Grid, Button } from "@mui/material";
import React from "react";
import About from "../Componants/About.css";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import aboutimg from "../Images/labtop.png";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import labtop from "../Images/cardimg.jpg";
import v1 from "../Images/vactor1.png";
import v2 from "../Images/vactor2.png";

export default function about() {
  return (
    <div className="about">
      <div className="heading " mt={"10rem"}>
        <h3> Why dose your business need AgencyCo</h3>
        <p>
          Following reasons show advantages of adding AgencyCo to your lead
          pages,
          <br /> demos and checkout
        </p>
      </div>
      <Grid container spacing={4} p="2rem" style={{ justifyContent: "center" }}>
        <Grid item xs={12} md={3} sm={12} className="card-style">
          <Box className="card">
            <img src={labtop} alt="labtop" />

            <h4>Convert traffic into sales</h4>
            <p>
              {" "}
              Proactively provide access to distinctive quality vectors for
              adaptive solutions
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sm={12} className="card-style">
          <Box className="card">
            <img src={labtop} alt="labtop" />
            <h4>Convert traffic into sales</h4>
            <p>
              {" "}
              Proactively provide access to distinctive quality vectors for
              adaptive solutions
            </p>
          </Box>
        </Grid>
        <Grid item md={3} sm={12} xs={12} className="card-style">
          <Box className="card">
            <img src={labtop} alt="labtop" />
            <h4>Convert traffic into sales</h4>
            <p>
              {" "}
              Proactively provide access to distinctive quality vectors for
              adaptive solutions
            </p>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} bgcolor="#f4f7fa" mt="2rem">
        <Grid item md={6} sm={12} xs={12}>
          <div className="about_details">
            <h5>
              <span style={{ color: "#ff8657" }}>About us</span>
            </h5>
            <h2>We help drive your business forward faster</h2>
            <p>
              Proactively syndicate open-source e-markets after low-risk
              high-yied synergy. professionally simplify visionary technology
              before team driven sources.
            </p>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <div className="conversion">
                  <div className="icon">
                    <SignalCellularAltIcon />
                  </div>
                  <h5>increase conversion</h5>
                </div>
                <div>
                  <p>Display recent conversions, bulid creadibity and trust</p>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                <div className="conversion">
                  <div className="icon">
                    <SignalCellularAltIcon />
                  </div>
                  <h5>increase conversion</h5>
                </div>
                <div>
                  <p>Display recent conversions, bulid creadibity and trust</p>
                </div>
              </Grid>
            </Grid>
            <Button variant="contained">view Details</Button>
          </div>
        </Grid>
        <Grid item xs={6} md={6} sm={12} xs={12}>
          <div className="about_images">
            <img src={v1} alt="v1"  id="v1"/>
            <img src={aboutimg} alt="about" id="img1"/>
            <img src={v2} alt="v2" id="v2"/>
          </div>
        </Grid>
        <div className="video-overview">
          <PlayCircleFilledIcon />
          <p> watch video overview</p>
        </div>
      </Grid>
    </div>
  );
}
