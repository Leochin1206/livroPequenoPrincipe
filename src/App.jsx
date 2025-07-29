import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Autor } from "./pages/autor";
import { Colega } from "./pages/colega";
import { PublicoAlvo } from "./pages/publicoAlvo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/autor" element={<Autor />} />
      <Route path="/colega" element={<Colega />} />
      <Route path="/publicoalvo" element={<PublicoAlvo />} />
    </Routes>
  )
}