import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.png";
import { ButtonBase } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const pages = ["Login"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [language, setLanguage] = React.useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "none", borderBottom: "1px solid #eee", padding: "18px 0" }}>
      <Container maxWidth="xl">
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
            }}
          >
            <img src={logo} alt="logo" loading="lazy" />
          </Box>

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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
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
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Open settings">
              <FormControl sx={{ mx: 1, minWidth: 80 }} size="small">
                <InputLabel id="demo-select-small-label">Lang</InputLabel>
                <Select labelId="demo-select-small-label" id="demo-select-small" value={language} label="Lang" onChange={handleChange}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="NL">NL</MenuItem>
                  <MenuItem value="English">English</MenuItem>
                </Select>
              </FormControl>
              <ButtonBase
                type="submit"
                variant="contained"
                sx={{
                  color: "#00c0b3",
                  background: "#fff",
                  marginLeft: "2rem",
                  padding: "12px 22px",
                  border: "2px solid #00c0b3",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Login
              </ButtonBase>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
