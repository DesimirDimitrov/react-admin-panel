import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="sign-in" element={<Signin />} />
    </Routes>
  );
}

export default Routing;
