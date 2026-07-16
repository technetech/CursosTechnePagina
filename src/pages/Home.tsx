import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import ProgramasUnificados from "../sections/ProgramasUnificados";
import Resultados from "../sections/Resultados";
import RutaEstrategica from "../sections/RutaEstrategica";
import CTABanner from "../sections/CTABanner";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <ProgramasUnificados />
      <Resultados />
      <RutaEstrategica />
      <CTABanner />
      <Footer />
    </div>
  );
}
