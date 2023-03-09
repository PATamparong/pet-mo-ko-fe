import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animals from "../../pages/Animals";

export default function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </Router>
  );
}
