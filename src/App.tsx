import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ProgramasUnificados from "./sections/ProgramasUnificados";
import Resultados from "./sections/Resultados";
import RutaEstrategica from "./sections/RutaEstrategica";
import CTABanner from "./sections/CTABanner";
import Formulario from "./sections/Formulario";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <ProgramasUnificados />
      <Resultados />
      <RutaEstrategica />
      <CTABanner />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
