import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import logo from "../Images/logo.png";
import navbar from "../Componants/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const [color , setColor]=useState(false) 
  function chaingColor(){
    if (window.scrollY >=90){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll' , chaingColor)
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" className={color ? 'header header-bg': 'header'}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            className="logo-img"
          >
            <img src={logo} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <ul className="toggle">
                <li>
                  <Link className="link-style" to="/">Home</Link>
                </li>
                <li>
                  <Link className="link-style" to="/About">About</Link>
                </li>
                <li>
                  <Link className="link-style" to="/Service">Service</Link>
                </li>
                <li>
                  <Link className="link-style" to="/Pricing">Pricing</Link>
                </li>
                <li>
                  <Link className="link-style" to="/review">Review</Link>
                </li>
              </ul>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: "flex ", md: "none" } }}
            className="logo-img"
          >
            <img src={logo} alt="logo" />
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="list"
          >
            <ul>
            <li>
            <Link className="link-style" to="/">Home</Link>
          </li>
          <li>
            <Link className="link-style" to="/About">About</Link>
          </li>
          <li>
            <Link className="link-style" to="/Service">Service</Link>
          </li>
          <li>
            <Link className="link-style" to="/Pricing">Pricing</Link>
          </li>
          <li>
            <Link className="link-style" to="/review">Review</Link>
          </li>

            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
