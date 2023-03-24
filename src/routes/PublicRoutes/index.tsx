import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animals from "../../pages/Animals";
import Dashboard from "../../pages/Dashboard";

export default function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </Router>
  );
}
