import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../Images/logo.png";
import navbar from "../Componants/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" className="a">
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
