import { Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Layout = () => {
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
              Logo
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Box>
  );
};

export { Layout };
