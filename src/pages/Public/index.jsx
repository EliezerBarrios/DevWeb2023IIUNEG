import { Box } from "@mui/material";
import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Login } from "./Login";
import { CompanyInfoRegister, EmailInput, UserInfoRegister } from "./Register";

const Public = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="registerEmail" element={<EmailInput />}>
            <Route path=":id" element={<EmailInput />} />
          </Route>
          <Route path="/registerCompanyData" element={<CompanyInfoRegister />}/>
          <Route path="/registerApplicantData" element={<UserInfoRegister />}/>
        </Route>
      </Routes>
    </Box>
  );
};

export { Public };
