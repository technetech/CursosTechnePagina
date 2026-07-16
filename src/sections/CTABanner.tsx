import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative min-h-[420px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.jpg"
          alt="Executives in seminar"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.35) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[24px] md:text-[32px] text-white leading-[1.35] max-w-[560px] mb-5"
        >
          Tu competencia ya está formando a sus directivos. La pregunta es cuándo
          empiezas tú.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-sans text-[15px] text-white/65 max-w-[440px] mb-8 leading-relaxed"
        >
          Las empresas que liderarán la próxima década no serán las que tengan acceso a la Inteligencia Artificial, sino aquellas cuyos equipos sepan implementarla. Hoy, esa sigue siendo la mayor oportunidad de crecimiento en Latinoamérica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="#formulario"
            className="inline-flex font-sans text-sm font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(43,106,255,0.3)] active:translate-y-0 px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Aplicar ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
