import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Hoy tenemos todas las áreas trabajando iniciativas para generar mayor productividad y eficiencia en Claro Colombia.",
    name: "Rodrigo de Gusmao",
    title: "CEO, Claro Colombia",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Este programa nos abrió los ojos a todo el potencial que tiene la inteligencia artificial en nuestras empresas.",
    name: "Alfredo Rizo",
    title: "CEO, Terranum",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "Saber y entender que la inteligencia artificial no viene a reemplazar humanos, más bien utilizarla como una herramienta a la cual se le tiene que dejar de tener miedo.",
    name: "Sergio Francisco Riva",
    title: "Director de Promoción, TV Azteca",
    image: "/images/testimonial-3.jpg",
  },
];

export default function Testimonios() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonios" className="bg-white py-20 md:py-24">
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
            VOCES DEL PROGRAMA
          </p>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight">
            <span className="text-[#111827]">Qué dicen los </span>
            <span className="text-[#2B6AFF] italic">directivos</span>
            <br className="hidden md:block" />
            <span className="text-[#111827]"> de nuestro programa</span>
          </h2>
        </motion.div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-[#F4F5F7] rounded-xl p-7"
            >
              <span className="font-serif text-5xl text-[#2B6AFF] leading-none block mb-4">
                &#x201C;
              </span>
              <p className="font-sans text-[15px] text-[#374151] leading-relaxed italic mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-sans text-sm font-semibold text-[#111827]">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-[#9CA3AF]">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F4F5F7] rounded-xl p-7"
              >
                <span className="font-serif text-5xl text-[#2B6AFF] leading-none block mb-4">
                  &#x201C;
                </span>
                <p className="font-sans text-[15px] text-[#374151] leading-relaxed italic mb-6">
                  {testimonials[active].quote}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#111827]">
                      {testimonials[active].name}
                    </p>
                    <p className="font-sans text-xs text-[#9CA3AF]">
                      {testimonials[active].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[#2B6AFF]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
