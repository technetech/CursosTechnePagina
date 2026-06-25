import { motion } from "framer-motion";

const outcomes = [
  {
    num: "01",
    title: "Materiales Didácticos del curso",
  },
  {
    num: "02",
    title: "Directorio de Herramientas IA",
  },
  {
    num: "03",
    title: "Acceso a Comunidad Techne y a Portal de Educación Continua",
  },
  {
    num: "04",
    title: "Plan Personal de Implementación IA",
  },
];

const stats = [
  { label: "98% completion" },
  { label: "1,100+ líderes" },
  { label: "12 países" },
];

export default function Resultados() {
  return (
    <section id="programa" className="bg-[#0A0A0A] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="font-serif text-[32px] md:text-[40px] text-white leading-tight">
              Al final de cualquiera de nuestros programas obtendras :
            </h2>
            <p className="font-sans text-[15px] text-white/55 max-w-[320px] mt-5 leading-relaxed">
              La experiencia está diseñada para cerrar con artefactos útiles, no
              con una lista de ideas sueltas.
            </p>
            <div className="h-px bg-white/10 my-8" />
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2B6AFF]" />
                  <span className="font-sans text-xs text-white/50">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {outcomes.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="relative pl-6 py-6 border-b border-white/[0.06] last:border-b-0"
              >
                {/* Blue accent line */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-[#2B6AFF]" />
                <p className="font-mono text-sm font-semibold text-[#2B6AFF] mb-2">
                  {item.num}
                </p>
                <h3 className="font-sans text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
