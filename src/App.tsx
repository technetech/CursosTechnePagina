import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import Aplicar from "./pages/Aplicar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/aplicar" element={<Aplicar />} />
    </Routes>
  );
}

export default App;
