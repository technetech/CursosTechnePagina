import { motion } from "framer-motion";

const modules = [
  {
    num: "MÓDULO 01",
    title: "Diagnóstico y Visión estratégica",
    desc: "Detecta ineficiencias operativas y ejecuta victorias tempranas (Quick Wins) mediante el diseño de instrucciones estratégicas aplicadas al negocio.",
    image: "/images/module-1.jpg",
  },
  {
    num: "MÓDULO 02",
    title: "Arquitectura de Decisión",
    desc: "Integra LLMs en el análisis de información estratégica y aprende metodologías de validación para asegurar la precisión de los resultados y minimizar sesgos técnicos.",
    image: "/images/module-2.jpg",
  },
  {
    num: "MÓDULO 03",
    title: "Gobernanza y Escalamiento",
    desc: "Define gobernanza, política de uso y comité de IA para tu empresa. Sales con el documento listo para llevar a junta directiva.",
    image: "/images/module-3.jpg",
  },
];

export default function RutaEstrategica() {
  return (
    <section id="ruta" className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs font-semibold text-[#2B6AFF] tracking-[0.12em] mb-3">
            RUTA ESTRATÉGICA
          </p>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight">
            <span className="text-[#111827]">Conoce la ruta </span>
            <span className="text-[#2B6AFF] italic">estratégica</span>
            <span className="text-[#111827]"> del programa</span>
          </h2>
          <p className="font-sans text-base text-[#6B7280] max-w-[520px] mx-auto mt-4">
            Un recorrido intensivo diseñado para llevarte de la curiosidad a la
            ejecución operativa.
          </p>
        </motion.div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={mod.image}
                alt={mod.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.4) 45%, transparent 70%)",
                }}
              />

              {/* Module Tag */}
              <span className="absolute top-4 left-4 font-mono text-[10px] font-semibold text-white bg-[#2B6AFF] px-3 py-1.5 rounded-md z-10">
                {mod.num}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-sans text-lg font-semibold text-white mb-2">
                  {mod.title}
                </h3>
                <p className="font-sans text-[13px] text-white/70 leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
