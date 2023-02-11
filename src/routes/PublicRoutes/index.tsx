import { Routes, Route } from "react-router-dom";
import Animals from "../../pages/Animals";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/animals" element={<Animals />} />
    </Routes>
  );
}
