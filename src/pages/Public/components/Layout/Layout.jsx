import { Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate , Link } from "react-router-dom";

import "./Layout.css"

const Layout = () => {

  const navigate = useNavigate();

  function toLogin() {
    navigate("login")
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="transparent" sx={{ boxShadow: "none" }}>
          <Toolbar>
            <Typography
              fontSize={24}
              fontWeight={600}
              sx={{ flexGrow: 1 }}
              color="#fff"
            >
              <Link to={"/"} className='toHome'>Logo</Link>
            </Typography>
            <button className="login" onClick={toLogin}>Iniciar Sesión</button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Box>
  );
};

export { Layout };
