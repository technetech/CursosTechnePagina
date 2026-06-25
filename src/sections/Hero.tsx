import { motion } from "framer-motion";

const stats = [
  { value: "12h", label: "ENTRENAMIENTO" },
  { value: "2 días", label: "PRESENCIAL" },
  { value: "1 cena", label: "NETWORKING" },
  { value: "40", label: "CUPOS MÁXIMO" },
];

export default function Hero() {
  const titleWords = ["Techne", "AI", "Executive", "Program"];
  const subtitleWords = ["para", "Directivos"];

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Executives collaborating"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.42) 50%, rgba(10,10,10,0.62) 100%)",
          }}
        />
        {/* Blue Glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 100%, rgba(43,106,255,0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs font-medium text-[#2B6AFF] tracking-[0.15em] mb-5"
        >
          PROGRAMA EJECUTIVO
        </motion.p>

        {/* Headline */}
        <h1 className="font-serif text-[36px] md:text-[56px] leading-[1.1] mb-6">
          <span className="flex flex-wrap gap-x-3 md:gap-x-4">
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.7 }}
                className="text-white"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="flex flex-wrap gap-x-3 md:gap-x-4 mt-1">
            {subtitleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + titleWords.length) * 0.08 + 0.3, duration: 0.7 }}
                className="text-[#2B6AFF] italic"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-sans text-base md:text-[17px] text-white/70 max-w-[520px] leading-relaxed mb-8"
        >
          Entrenamiento intensivo de 2 días para C-levels y directores. Deja de
          ver la IA como tendencia y empieza a usarla como ventaja competitiva
          operativa, real y medible.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          <a
            href="#formulario"
            className="inline-flex font-sans text-base font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(43,106,255,0.3)] active:translate-y-0 px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Aplicar al programa
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-4 mt-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-x-4 md:gap-x-6"
            >
              {i > 0 && (
                <div className="hidden sm:block w-px h-8 bg-white/15 mr-2" />
              )}
              <div>
                <p className="font-serif text-[28px] md:text-[32px] text-white leading-none">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] font-medium text-white/40 tracking-[0.1em] mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
