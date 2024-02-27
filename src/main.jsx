import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./assets/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Public } from "./pages/Public";

const router = [
  // Rutas publicas
  {
    path: "/*",
    element: Public,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {router.map((item, index) => (
        <Route path={item.path} element={item.element()} key={index} />
      ))}
    </Routes>
  </BrowserRouter>
);
