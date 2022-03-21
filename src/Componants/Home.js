import React from "react";
import Home from "../Componants/Home.css";
import { Grid, Typography, TextField, Button, Checkbox } from "@mui/material";
import logo from "../Images/logo.png";
import ContactlessIcon from "@mui/icons-material/Contactless";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

export default function () {
  return (
    <div className="home">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} className="logo-side">
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item xs={6} md={6}>
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <div className="nav-bar">
                <ul >
                  <li >Home</li>
                  <li >About</li>
                  <li >Service</li>
                  <li >Pricing</li>
                  <li >Pages</li>
                  <li >Contact</li>
                </ul>
              </div>
            </div>
          </nav>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} className="left-text-side">
          <div className="text-company">
            <Typography variant="h3" component="h3">
              We are Digital Agency & Marketing
            </Typography>
            <p>
              Rapidously conceptualize sustainable process improvemnets without
              superior infomediaries.Quickly parallel task 24/365 catalysts for
              chainge.
            </p>
          </div>
          <div className="trusted">
            <p>Trusted by companies like</p>
            <ul>
              <li>
                <ContactlessIcon />
                airbnb
              </li>
              <li>
                <AcUnitIcon />
                Paypal
              </li>
              <li>
                <AirIcon />
                slack
              </li>
              <li>
                <AirplanemodeActiveIcon />
                Spotify
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={6} md={6} className="left-text-side">
          <div className="form">
            <h2>Get a quote today</h2>
            <p>Get response within 24 hours</p>
            <div className="form-aria">
              <TextField
                required
                id="outlined-required"
                label="Enter your Name"
                placeholder="Enter your Name"
                className="abc"
              />
              <TextField
                required
                id="outlined-required"
                label="Enter your Email"
                placeholder="Enter your Email"
                className="abc"
              />
              <TextField
                required
                id="outlined-required"
                label="Enter your subject"
                placeholder="Enter your subject"
                className="abc"
              />
              <TextField
                required
                id="outlined-multiline-static"
                label="write your message"
                placeholder="write your message"
                multiline
                rows={4}
                className="abc"
              />
              <Button variant="contained" className="abc">
                Send
              </Button>
              <div className="terms">
                <Checkbox />
                <p>I Agree Terms & Condition</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}