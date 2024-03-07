import { Box } from "@mui/material";
import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Login } from "./Login";
import { EmailInput } from "./Register";


const Public = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<EmailInput />} />
        </Route>
      </Routes>
    </Box>
  );
};

export { Public };
