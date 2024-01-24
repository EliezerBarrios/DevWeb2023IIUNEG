import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./assets/index.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const router = [
  {
    path: "/",
    element: React.lazy(() => import("./pages/Public")),
  },
  {
    path: "/chatbot",
    element: React.lazy(() => import("./pages/Public/chatbot")),
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
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
