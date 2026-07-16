import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Portal from "./pages/Portal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<Portal />} />
    </Routes>
  );
}

export default App;
