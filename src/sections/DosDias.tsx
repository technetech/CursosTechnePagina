import { motion } from "framer-motion";
import { Check } from "lucide-react";

const days = [
  {
    label: "Día 1 · Criterio",
    title: "Frontera técnica, estrategia y decisiones",
    items: [
      "Qué puede hacer AI hoy y cómo traducirlo a negocio.",
      "Uso avanzado de ChatGPT, Claude y Claude Cowork.",
      "Análisis financiero, inteligencia de negocios y toma de decisiones con AI.",
      "Mapa inicial de oportunidades de automatización por compañía.",
    ],
    footer: "Cierra con cena de networking de la cohorte.",
    num: "01",
  },
  {
    label: "Día 2 · Implementación",
    title: "Automatización, agentes y plan de ejecución",
    items: [
      "Automatización de procesos con n8n y agentes de AI.",
      "Creación de herramientas internas y websites con Lovable.",
      "Diseño del plan de implementación de AI para cada compañía.",
      "Ruta de aprendizaje técnica y cierre ejecutivo del programa.",
    ],
    footer: "Sales con un plan aplicado, no con notas dispersas.",
    num: "02",
  },
];

export default function DosDias() {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight">
            <span className="text-white">Dos días de </span>
            <span className="text-[#2B6AFF] italic">trabajo ejecutivo</span>
          </h2>
          <p className="font-sans text-[15px] text-white/55 max-w-[420px] mt-4 leading-relaxed">
            El programa reduce teoría, agrupa decisiones y usa la sala para
            practicar con casos cercanos a los asistentes.
          </p>
        </motion.div>

        {/* Day Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {days.map((day, i) => (
            <motion.div
              key={day.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
            >
              {/* Large background number */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-2 right-4 font-serif text-[180px] leading-none text-white/[0.03] select-none pointer-events-none"
              >
                {day.num}
              </motion.span>

              <p className="relative font-mono text-[11px] font-medium text-[#2B6AFF] tracking-[0.08em] mb-3">
                {day.label}
              </p>
              <h3 className="relative font-sans text-xl font-bold text-white mb-5">
                {day.title}
              </h3>

              <ul className="relative space-y-3">
                {day.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-[#2B6AFF] mt-0.5 flex-shrink-0"
                    />
                    <span className="font-sans text-sm text-white/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative h-px bg-white/[0.08] mt-6 mb-4" />
              <p className="relative font-sans text-[13px] font-semibold text-white">
                {day.footer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
