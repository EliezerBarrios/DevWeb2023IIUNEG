import { Box } from "@mui/material";
import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { EmailInput } from "./components/EmailInput/EmailInput";

const Public = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Landing />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default Public;
