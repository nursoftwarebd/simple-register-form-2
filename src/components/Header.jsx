import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import logo from "../assets/logo.png";
import { ButtonBase } from "@mui/material";

const pages = ["Login"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "none", borderBottom: "1px solid #E8E8E8", padding: "26px 0" }}>
      <Container>
        {/* ======================= desktop logo */}
        <Toolbar disableGutters>
          <Box
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
              width: "160px",
              height: "48px",
            }}
          >
            <img style={{ width: "100%", height: "100%" }} src={logo} alt="logo" loading="lazy" />
          </Box>
          {/* =========================== mobile / tab size device logo */}
          <Box
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,

              color: "inherit",
            }}
          >
            <img src={logo} alt="logo" loading="lazy" />
          </Box>
          {/* for structure.. this is empty box */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          {/* menu icon here */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
              sx={{ marginRight: "5px" }}
            >
              <MenuIcon />
            </IconButton>

            {/* =============== dropdown menu here for mobile & tab device */}
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
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Box key={page} sx={{ padding: "20px" }}>
                  <Typography
                    sx={{
                      color: "#00c0b3",
                      background: "#fff",
                      padding: "10px 24px",
                      border: "2px solid #00c0b3",
                      borderRadius: "30px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    href="#"
                    component="a"
                    textAlign="center"
                  >
                    {page}
                  </Typography>

                  <Box sx={{ marginTop: "20px" }}>
                    <select className="select_btn_menu" name="language" id="language">
                      <option value="NL">NL</option>
                      <option value="EN">EN</option>
                    </select>
                  </Box>
                </Box>
              ))}
            </Menu>
          </Box>

          {/* ================================ desktop login & language buttons here */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {/* language */}
            <Box>
              {" "}
              <Box sx={{ display: "inline-block" }}>
                <select className="select_btn" name="language" id="language">
                  <option value="NL">NL</option>
                  <option value="EN">EN</option>
                </select>
              </Box>
              {/* login */}
              <ButtonBase
                type="submit"
                variant="contained"
                sx={{
                  color: "#00c0b3",
                  background: "#fff",
                  padding: "10px 24px",
                  marginLeft: "32px",
                  border: "2px solid #00c0b3",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Login
              </ButtonBase>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
