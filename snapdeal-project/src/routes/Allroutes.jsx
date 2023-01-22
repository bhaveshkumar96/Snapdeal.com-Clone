import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login/Login";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
