import React from "react";
import review from "../Componants/review.css";
import { Grid, Box, Avatar, TextField ,Button} from "@mui/material";
import avater from "../Images/avater.jpg";

export default function Review() {
  return (
    <div className="review">
      <h2>What Customer say about us</h2>
      <p>
        Rapidiously morph transparent internal or 'organic' sources whereas
        resource sucking e-
        <br />
        business. Conveniently innovte compelling internal.
      </p>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={5} md={5}>
          <Box className="commit-customer">
            <p>
              " I just wanted to share a quick note and let you know that you
              guys do a really good job. i'm glad i decided to work with you.
              its really great how easy your websites are to update and manage .
              i never have any problem ata all.
            </p>
            <div className="avatar-img">
              <Avatar alt="" src={avater} />
              <h5>
                {" "}
                <span style={{ color: "blue" }}>Ciaran kierce</span>
                <p>AppCo</p>
              </h5>
            </div>
          </Box>
        </Grid>
        <Grid item xs={5} md={5}>
          <Box className="commit-customer">
            <p>
              " I just wanted to share a quick note and let you know that you
              guys do a really good job. i'm glad i decided to work with you.
              its really great how easy your websites are to update and manage .
              i never have any problem ata all.
            </p>
            <div className="avatar-img">
              <Avatar alt="" src={avater} />
              <h5>
                {" "}
                <span style={{ color: "blue" }}>Ciaran kierce</span>
                <p>AppCo</p>
              </h5>
            </div>
          </Box>
        </Grid>
        <Grid item xs={5} md={5} className="contact-review">
          <h2>Contact with us </h2>
          <p>
            it's very easy to get in touch with us . just use the contact form
            or pay us a visit for a coffee at the office .Dynamically innvoate
            competitve technology after an expanded array fo leadership
          </p>
          <h6>Head office</h6>
          <p>121 kingst Melbourne VIC 3000, Australia</p>
          <p> Phon:+61254399</p>
          <p>
            Email:<span style={{ color: "blue" }}>hello@yourdomain.com</span>
          </p>
        </Grid>
        <Grid item xs={7} md={7} className="contact-review">
          <h2>Reach us quickly</h2>
          <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
              <TextField
                required
                id="outlined-required"
                label="Enter your Name"
                placeholder="Enter your Name"
                className="message"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                id="outlined-required"
                label="Enter your Email"
                placeholder="Enter your Email"
                className="message"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                id="outlined-required"
                label="Phone Number"
                placeholder="Phone Number"
                className="message"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                id="outlined-required"
                label="Company"
                placeholder="Company"
                className="message"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="outlined-multiline-static"
                label="message"
                placeholder="message"
                multiline
                rows={4}
                className="message"
              />
            </Grid>
          </Grid>
          <Button variant="contained" size="medium">
          Send message
        </Button>
        </Grid>
      </Grid>
    </div>
  );
}
