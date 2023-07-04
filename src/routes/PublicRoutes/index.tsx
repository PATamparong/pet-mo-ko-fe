import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animals from "../../pages/Animals";
import Dashboard from "../../pages/Dashboard";
import Services from "../../pages/Services";
import Details from "../../pages/AnimalDetails";
import Login from "../../pages/Login";

export default function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}
