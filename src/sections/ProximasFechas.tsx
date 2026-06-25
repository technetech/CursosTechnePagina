import { motion } from "framer-motion";

const dates = [
  { day: "28", month: "JUL", year: "2026", city: "Ciudad de México", country: "MÉXICO", daysLeft: "En 33 días" },
  { day: "4", month: "AGO", year: "2026", city: "Quito", country: "ECUADOR", daysLeft: "En 40 días" },
  { day: "9", month: "SEP", year: "2026", city: "Bogotá", country: "COLOMBIA", daysLeft: "En 76 días" },
  { day: "23", month: "SEP", year: "2026", city: "CDMX", country: "MÉXICO", daysLeft: "En 90 días" },
  { day: "6", month: "OCT", year: "2026", city: "Por confirmar", country: "COSTA RICA", daysLeft: "En 103 días" },
  { day: "14", month: "OCT", year: "2026", city: "Lima", country: "PERÚ", daysLeft: "En 111 días" },
];

export default function ProximasFechas() {
  return (
    <section id="fechas" className="bg-[#0A0A0A] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs font-semibold text-[#2B6AFF] tracking-[0.12em] mb-3">
            PRÓXIMAS FECHAS
          </p>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight mb-3">
            <span className="text-white">Formato </span>
            <span className="text-[#2B6AFF] italic">presencial</span>
            <span className="text-white"> en tu país</span>
          </h2>
          <p className="font-sans text-base text-white/60 max-w-[480px] mb-10">
            Sesiones intensivas presenciales en las principales capitales de
            Latinoamérica. Plazas limitadas por cohorte.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/10 hidden md:block" />

          {/* Scrollable container for mobile */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex md:grid md:grid-cols-6 gap-6 min-w-[720px] md:min-w-0">
              {dates.map((item, i) => (
                <motion.div
                  key={item.city}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative flex-1"
                >
                  {/* Node */}
                  <div className="hidden md:flex absolute -top-1 left-0 w-2 h-2 rounded-full border-2 border-[#2B6AFF] bg-[#0A0A0A] -translate-y-1/2" />

                  {/* Date */}
                  <div className="flex items-start gap-1 mt-0 md:mt-6">
                    <span className="font-serif text-[40px] md:text-[48px] text-white leading-none">
                      {item.day}
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[#2B6AFF] mt-1">
                      {item.month}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-white/30 mt-0.5">
                    {item.year}
                  </p>

                  {/* City */}
                  <p className="font-sans text-base font-semibold text-white mt-3 leading-tight">
                    {item.city}
                  </p>
                  <p className="font-mono text-[10px] font-medium text-white/35 tracking-[0.08em] mt-1">
                    {item.country}
                  </p>

                  {/* Status */}
                  <span className="inline-block mt-3 px-3 py-1 rounded-full border border-[#2B6AFF] text-[#2B6AFF] font-sans text-[9px] font-semibold tracking-wide">
                    CUPOS ABIERTOS
                  </span>

                  {/* Countdown */}
                  <p className="font-sans text-[11px] text-white/30 mt-2">
                    {item.daysLeft}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="#formulario"
            className="inline-flex font-sans text-sm font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(43,106,255,0.3)] active:translate-y-0 px-8 py-3 rounded-full transition-all duration-200"
          >
            Aplicar al programa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
