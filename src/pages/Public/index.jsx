import { Box } from "@mui/material";
import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Login } from "./Login";
import { EmailInput } from "./Register";
import Chatbot from "./chatbot";
import Chat from "./chat";
import Ofertas from "./ofertas";
import { CompanyInfoRegister, EmailInput, UserInfoRegister } from "./Register";

const Public = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<EmailInput />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="chat" element={<Chat />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="registerEmail" element={<EmailInput />}>
            <Route path=":id" element={<EmailInput />} />
          </Route>
          <Route
            path="/registerCompanyData"
            element={<CompanyInfoRegister />}
          />
          <Route path="/registerApplicantData" element={<UserInfoRegister />} />
        </Route>
      </Routes>
    </Box>
  );
};

export { Public };
