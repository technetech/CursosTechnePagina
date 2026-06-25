import { motion } from "framer-motion";

const columns = [
  {
    num: "01",
    title: "Herramientas de IA para negocios",
    items: [
      "Uso avanzado de Claude y ChatGPT",
      "Automatización con Claude Cowork",
      "Creación de herramientas y websites con Lovable",
    ],
  },
  {
    num: "02",
    title: "Automatización y agentes",
    items: [
      "Automatización de tareas ejecutivas",
      "Agentes de IA para empresas",
      "Automatización de procesos con n8n",
    ],
  },
  {
    num: "03",
    title: "Inteligencia de negocios",
    items: [
      "Business intelligence con AI",
      "Análisis financiero asistido por AI",
      "Toma de decisiones con datos y modelos",
    ],
  },
  {
    num: "04",
    title: "Estrategia corporativa",
    items: [
      "Dirección de estrategias de AI",
      "Priorización de casos de uso",
      "Planes de implementación en organizaciones",
    ],
  },
];

const colVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Contenido() {
  return (
    <section className="bg-[#F4F5F7] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-xs font-semibold text-[#2B6AFF] tracking-[0.12em] mb-3">
            CONTENIDO
          </p>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight">
            <span className="text-[#111827]">Qué se aprenderá </span>
            <span className="text-[#2B6AFF] italic">en el programa</span>
          </h2>
          <p className="font-sans text-[15px] text-[#6B7280] max-w-[460px] mt-4 leading-relaxed">
            Cuatro bloques, mucho uso práctico y una sola meta: convertir IA en
            decisiones, automatización y ejecución.
          </p>
        </motion.div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={col.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={colVariants}
            >
              <p className="font-mono text-xs font-semibold text-[#2B6AFF] mb-3">
                {col.num}
              </p>
              <h3 className="font-sans text-base font-bold text-[#111827] mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B6AFF] mt-2 flex-shrink-0" />
                    <span className="font-sans text-sm text-[#4B5563] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
