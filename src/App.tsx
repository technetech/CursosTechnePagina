import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import LogoCarousel from "./sections/LogoCarousel";
import ProximasFechas from "./sections/ProximasFechas";
import DetallesCursos from "./sections/DetallesCursos";
import Galeria from "./sections/Galeria";
import Resultados from "./sections/Resultados";
import RutaEstrategica from "./sections/RutaEstrategica";
import Contenido from "./sections/Contenido";
import DosDias from "./sections/DosDias";
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
      <Galeria />
      <Resultados />
      <RutaEstrategica />
      <Contenido />
      <DosDias />
      <Testimonios />
      <CTABanner />
      <Aliados />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
