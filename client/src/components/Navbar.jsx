import * as React from "react";
import { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  IconButton,
  styled,
} from "@mui/material";
import toast from "react-hot-toast";
import { Adb as AdbIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../Redux/Features/authSlice";
const pages = ["Home", "SingIn", "SignUp", "PlayGrounds"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
  const { userName, authenticated } = useSelector(state => ({ ...state.auth }));
  useEffect(() => {}, [authenticated]);
  useEffect(() => {}, [userName]);
  const RouterLinkH = styled(Link)({
    textDecoration: "none",
    color: "#ffce6d",
  });
  const RouterLink = styled(Link)({
    textDecoration: "none",
    color: "#ffffff",
  });
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const nameLogo = "<Clade/>";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const onLogout = () => {
    dispatch(userLogOut({ toast, navigate }));
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //color #161d27 #0d1117
  return (
    <AppBar position="static" color="primary_bg" sx={{ background: "#1c1e29" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, height: 45 }}
            alt="logo."
            src="/images/logo.png"
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".05rem",
              textDecoration: "none",
            }}
            color="#ffce6d"
          >
            <RouterLinkH to="/">{`${nameLogo}`}</RouterLinkH>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary_white"
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
              onClick={handleCloseNavMenu}
            >
              <MenuItem>
                <Typography textAlign="center">
                  <RouterLink to="/">Home</RouterLink>
                </Typography>
              </MenuItem>
              {authenticated ? (
                <div></div>
              ) : (
                <>
                  <MenuItem>
                    <Typography textAlign="center">
                      <RouterLink to="/signin">Sign In</RouterLink>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      <RouterLink to="/signup">Sign Up</RouterLink>
                    </Typography>
                  </MenuItem>
                </>
              )}
              <MenuItem>
                <Typography textAlign="center">
                  <RouterLink to="/playground">PlayGround</RouterLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            component="img"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, height: 45 }}
            alt="logo."
            src="/images/logo.png"
          />

          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".05rem",
              textDecoration: "none",
            }}
            color="#ffce6d"
          >
            <RouterLinkH to="/">{`${nameLogo}`}</RouterLinkH>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
            >
              <RouterLink to="/" style={{ color: "white" }}>
                Home
              </RouterLink>
            </Button>
            {authenticated ? (
              <div></div>
            ) : (
              <>
                {" "}
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  <RouterLink to="/signup" style={{ color: "white" }}>
                    Sign Up
                  </RouterLink>
                </Button>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  <RouterLink to="/signin" style={{ color: "white" }}>
                    Sign In
                  </RouterLink>
                </Button>
              </>
            )}
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
            >
              <RouterLink to="/playground" style={{ color: "white" }}>
                PlayGround
              </RouterLink>
            </Button>
          </Box>
          {authenticated ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={userName} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", color: "#1c1e29" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <RouterLink
                    to="/changePass"
                    textAlign="center"
                    style={{ color: "white" }}
                  >
                    Change password
                  </RouterLink>
                </MenuItem>
                <MenuItem onClick={onLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <></>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
