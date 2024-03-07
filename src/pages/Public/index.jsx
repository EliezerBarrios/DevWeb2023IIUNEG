import { Box } from "@mui/material";
import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Login } from "./Login";
import Chatbot from "./chatbot";
import Chat from "./chat";
import Ofertas from "./ofertas";
import { CompanyInfoRegister, EmailInput, UserInfoRegister } from "./Register";

import { EmailInput } from "./Register";
import Profile from "./Profile/Profile";

const Public = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="chat" element={<Chat />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="registerEmail">
            <Route path=":id" element={<EmailInput />} />
          </Route>
          <Route
            path="/registerCompanyData"
            element={<CompanyInfoRegister />}
          />
          <Route path="/registerApplicantData" element={<UserInfoRegister />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Box>
  );
};

export { Public };
