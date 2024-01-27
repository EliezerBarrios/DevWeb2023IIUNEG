import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./assets/index.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { Layout } from "./pages/Public/components";
import { Landing } from "./pages/Public/Landing";
import { EmailInput } from "./pages/Public/components/Register";
import { Login } from "./pages/Public/components/Login";

const router = [
  {
    path: "/",
    element: React.lazy(() => import("./pages/Public")),
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Landing />} />
          <Route path="registerEmail" element={<EmailInput />}>
            <Route path=":id" element={<EmailInput />} />
          </Route>
        </Route>
        <Route path="/Login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
