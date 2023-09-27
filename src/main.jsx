import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShowData from "./ShowData.jsx";
import EditData from "./EditData.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShowData />} />
      <Route path="/add" element={<App />} />
      <Route path="/edit/:id" element={<EditData />} />
    </Routes>
  </BrowserRouter>
);
