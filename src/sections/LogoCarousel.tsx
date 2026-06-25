import { motion } from "framer-motion";

const companies = [
  "SODIMAC", "Terpel", "Banco de Occidente", "DAVIVIENDA", "Haceb",
  "CEMEX", "SURA", "Bancolombia", "Corona", "CELSIA", "ISAGEN",
  "Banco Guayaquil", "Bci", "Softtek", "Grupo Aval", "Banco Azteca",
  "Kueski", "Farmacias Similares", "Seguros Bolívar", "VALMER", "Alkosto", "Bios",
];

export default function LogoCarousel() {
  const doubled = [...companies, ...companies];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="bg-[#F4F5F7] py-10 overflow-hidden"
    >
      <p className="font-sans text-[11px] font-medium text-gray-400 tracking-[0.08em] text-center mb-6 px-6">
        LÍDERES DE LAS EMPRESAS MÁS IMPORTANTES DE{" "}
        <span className="font-semibold text-gray-500">LATAM</span> HAN PASADO
        POR EL PROGRAMA
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center h-8 px-6 md:px-8 text-sm font-semibold text-gray-400/60 hover:text-gray-500/80 transition-opacity duration-200 select-none"
              style={{ filter: "grayscale(100%)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
}
