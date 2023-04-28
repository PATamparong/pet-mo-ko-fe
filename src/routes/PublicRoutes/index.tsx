import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animals from "../../pages/Animals";
import Home from "../../pages/Home";
import AppServices from "../../pages/AppServices";
import Details from "../../pages/Details";

export default function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/services" element={<AppServices />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}
