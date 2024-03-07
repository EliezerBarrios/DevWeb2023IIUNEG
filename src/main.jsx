import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./assets/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Public } from "./pages/Public";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const router = [
  // Rutas publicas
  {
    path: "/*",
    element: Public,
  },
  {
    path: "/chatbot",
    element: React.lazy(() => import("./pages/Public/chatbot")),
  },
  {
    path: "/chat",
    element: React.lazy(() => import("./pages/Public/chat")),
  },
  {
    path: "/ofertas",
    element: React.lazy(() => import("./pages/Public/ofertas")),
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {router.map((item) => (
        <Route path={item.path} element={item.element()} />
      ))}
    </Routes>
  </BrowserRouter>
);
