import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Inteligencia Artificial Aplicada",
    description: "Domina las bases de la IA y aplícalas a casos de uso reales en tu empresa.",
    modality: "Presencial / Digital",
    image: "/images/module-1.jpg",
  },
  {
    id: 2,
    title: "Multiplica tus resultados con IA",
    description: "Aprende estrategias avanzadas para escalar operaciones usando automatización.",
    modality: "Presencial / Digital",
    image: "/images/module-2.jpg",
  },
  {
    id: 3,
    title: "Curso de Verano",
    description: "Edición intensiva para directivos. Actualízate rápidamente en las tendencias.",
    modality: "Presencial / Digital",
    image: "/images/module-3.jpg",
  },
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
          className="text-center md:text-left"
        >
          <p className="font-mono text-xs font-semibold text-[#2B6AFF] tracking-[0.12em] mb-3 uppercase">
            Nuestros programas
          </p>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight mb-3">
            <span className="text-white">Formato </span>
            <span className="text-[#2B6AFF] italic">presencial</span>
            <span className="text-white"> y digital</span>
          </h2>
          <p className="font-sans text-base text-white/60 max-w-[480px] mb-12 md:mx-0 mx-auto">
            Elige el programa que mejor se adapte a tus necesidades y comienza a transformar tu empresa hoy.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative overflow-hidden group flex flex-col justify-between h-full min-h-[400px] p-8 border border-white/10 hover:border-[#2B6AFF]/50 transition-colors"
            >
              {/* Background Image with Gradient */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/90 to-[#0A0A0A] z-10" />
              </div>

              {/* Content */}
              <div className="relative z-20 flex-1 flex flex-col">
                <span className="inline-block self-start px-3 py-1 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-white/90 font-sans text-[10px] font-semibold tracking-wide mb-4">
                  {course.modality}
                </span>
                <h3 className="font-serif text-[24px] text-white leading-tight mb-3 mt-auto">
                  {course.title}
                </h3>
                <p className="font-sans text-sm text-white/70 mb-6">
                  {course.description}
                </p>
              </div>

              <div className="relative z-20 mt-auto pt-6 border-t border-white/10">
                <a
                  href="#formulario"
                  className="w-full inline-flex justify-center font-sans text-sm font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] hover:-translate-y-px active:translate-y-0 px-6 py-3 transition-all duration-200"
                >
                  Aplicar al programa
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
