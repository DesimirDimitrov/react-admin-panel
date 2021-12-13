import { Home } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-in" element={<Signin />} />
    </Routes>
  );
}

export default Routing;
