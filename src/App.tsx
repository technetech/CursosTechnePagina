import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import LogoCarousel from "./sections/LogoCarousel";
import ProximasFechas from "./sections/ProximasFechas";
import DetallesCursos from "./sections/DetallesCursos";
import Resultados from "./sections/Resultados";
import RutaEstrategica from "./sections/RutaEstrategica";
import Testimonios from "./sections/Testimonios";
import CTABanner from "./sections/CTABanner";
import Aliados from "./sections/Aliados";
import Formulario from "./sections/Formulario";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <ProximasFechas />
      <DetallesCursos />
      <Resultados />
      <RutaEstrategica />
      <Testimonios />
      <CTABanner />
      <Aliados />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
